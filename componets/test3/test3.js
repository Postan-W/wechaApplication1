// componets/test3/test3.js
Component({
    /**
     * 组件的属性列表
     */
    //为了提高渲染的效率，使用pureDataPattern指定满足什么样正则的data字段为纯数据字段，即页面渲染时不会用到，即渲染时不回去检索这种字段。双斜杠内写正则式。之后页面上使用该字段也是无法被渲染的 
    options:{
        //以rgb开头的视为纯数据字段
        pureDataPattern:/^rgb/
    },
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        rgbTest:"test",
        rgb:{r:0,g:0,b:0},
        fullColor:'0,0,0'//根据rgb对象的三个属性，动态得到fullColor的值
    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeR(){this.setData({
            'rgb.r':this.data.rgb.r + 5 > 255 ? 255 : this.data.rgb.r + 5
        })},
        changeG(){this.setData({
            'rgb.g':this.data.rgb.g + 5 > 255 ? 255 : this.data.rgb.g + 5
        })},
        changeB(){this.setData({
            'rgb.b':this.data.rgb.b + 5 > 255 ? 255 : this.data.rgb.b + 5
        })}

    },
    observers:{
        //其中rgb.r,rgb.g,rgb.b列出了所有属性，此时可以用rgb.**代替，即通配
        'rgb.r,rgb.g,rgb.b':function(newr,newg,newb){
            this.setData({
                fullColor:`${newr},${newg},${newb}`
            })
        }
    },
    //定义组件的声明周期函数。旧的定义方式是直接在Components下定义，比如和methods平级，而不必写在lifetimes里面
    lifetimes:{
         created(){
            console.log("组件被创建了")
         },
         attached(){
             console.log("组件被放入到使用该组件的页面节点树中了")
         }
    }
})
