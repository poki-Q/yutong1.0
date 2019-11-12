// pages/dynamic/dynamic.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
    items:[],
    banner_srcs: ['1.png', '2.png','3.png'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var items = wx.getStorageSync("items");
    this.setData({
      items:items
    });
  },

  //跳转到详情
  toDetail:function(e){
    console.log(e);
    var id = e.target.id;  //e.target事件源  被点击的图片
    var items = wx.getStorageSync("items");
    console.log("test:items");
    console.log(items);
    var type = e.target.dataset.type;
    console.log(type);
      wx.navigateTo({
       url: '../detail/detail?id=' + id+'&type='+type,  //跳转并传递参数   多给参数用&连接
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