// componets/childComponent/childComponent.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        count:Number
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        addTen(){
            this.setData({
                count:this.properties.count + 10
            })
            //没有参数时可以不传
            this.triggerEvent("sync",{value:this.properties.count})
        }

    }
})
