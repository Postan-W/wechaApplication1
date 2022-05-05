// componets/test2/test2.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        n1:0,
        n2:0,
        sum:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        addN1(){this.setData({n1:this.data.n1 + 1})},
        addN2(){this.setData({n2:this.data.n2 + 1})}
    },
    observers:{
        //监听变量值的变化，变量被setData时触发如果发生变化则调用声明的function，新值是作为参数传入的，key中变量顺序和函数参数顺序保持一致
        'n1,n2':function(newn1,newn2){
            this.setData({
                sum:newn1 + newn2
            })
        },
        //还可以精确到监听对象的某个属性。在test3组件中进行演示
    }
})
