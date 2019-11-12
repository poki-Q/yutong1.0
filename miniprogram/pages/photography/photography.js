// pages/photography/photography.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photos:[]  //每一类照片的数据
  },






  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var photos = wx.getStorageSync("photos");
    this.setData({
      photos:photos
    });
  },

  //跳转到详情页面
  toDetail:function(e){
    wx.navigateTo({
      url: '../detail/detail?id='+e.target.id+'&type=photos',
    })
  },





  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})