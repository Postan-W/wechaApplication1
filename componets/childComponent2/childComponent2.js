// componets/childComponent2/childComponent2.js
const myBehavior = require("../../behaviors/myBehaviors")
Component({
    /**
     * 组件的属性列表
     */
    behaviors:[myBehavior],
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

    }
})
