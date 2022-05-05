// componets/test/test.js
Component({
    /**
     * 组件的属性列表
     */
    /**isolated:页面和组件样式相互隔离，即互相调用class样式无效 
     * apply-shared:组件可以调用页面的，页面不能调用组件的样式
     * shared：页面和组件可以相互调用class样式
    */
    options: {
        styleIsolation: "isolated",
    },
    properties: {
        //简化定义属性，只指定类型不指定默认值
        max: Number,
        //完整定义方式，指定类型和默认值
        min:{
            type: Number,
            value: 1
        }

    },

    /**
     * 组件的初始数据
     */
    data: {
        count:0
    },
    //注：组件中的data和properties都是可读写的，事实上他们是同一个对象，所以都可以用setdata方法赋值，也都可以在页面上通过mustach语法引用
    /**
     * 组件的方法列表
     */
    methods: {
        addCount(){
            if(this.data.count >= this.properties.max){
                wx.showToast({
                    title: '已达到最大值',
                    icon:'none'
                  })
                return
            }

            this.setData({
                count:this.data.count + 1
            })
            this._showCount()
        },
        _showCount(){
            //查看data和properties的值,可以看到他们是一样的
            console.log(this.data)
            console.log(this.properties)
            wx.showToast({
              title: 'count的值为：'+this.data.count,
              icon:'none'
            })
        }

    },

})
