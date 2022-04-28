// pages/demopage3/demopage3.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgsrc: "/images/1.jpg", 
        randnum: Math.random()*10,
        count: 0,
        msg:"你好",
    },
    pressbutton(e){
        console.log(e)
    },
    plusone(){
        this.setData({count :this.data.count + 1})
    },
    plustwo(e){
        this.setData({count:this.data.count + e.target.dataset.number})
    },
    inputhandler(e){
        this.setData({msg:e.detail.value})
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})