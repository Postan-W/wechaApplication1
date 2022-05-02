// pages/info/info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        /**页面参数 */
        query:{}

    },
    back(){
        wx.navigateBack()
    },
    /**
     * 生命周期函数--监听页面加载
     * 调用页面时传递的参数，比如请求/pages/info/info?name=联盟&age=21后面的
     * 参数就是被onload接收，直接打印options可以看到。为了页面参数能在其他地方被使用到，
     * 在data里定义一个变量，在onload里将options赋给这个变量。
     */
    onLoad(options) {
        console.log(options)
        this.setData({
            query:options
        })
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