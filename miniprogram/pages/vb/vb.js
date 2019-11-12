// pages/vb/vb.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {

    var types = wx.getStorageSync(e.type);  //e.type = videos || bands
    //设置数据
    this.setData({
      type:types
    });
  },




  //跳转到详情页面
  toDetail: function (e) {
    console.log(e);
    var id = e.target.id;  //e.target事件源  被点击的图片
    var type = e.target.dataset.type;
    wx.navigateTo({
      url: '../detail/detail?id='+id+'&type='+type,  //跳转并传递参数   多给参数用&连接
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