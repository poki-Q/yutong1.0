Page({

  /**
   * 页面的初始数据
   */
  data: {
    alpha: [1, 0.98, 0.96, 0.94, 0.92, 0.91, 0.9, 0.89, 0.88, 0.86, 0.84, 0.82, 0.8, 0.79, 0.78, 0.77, 0.76, 0.74, 0.72, 0.7, 0.68, 0.67, 0.66, 0.65, 0.64, 0.63, 0.61, 0.59, 0.57, 0.55, 0.54, 0.53, 0.52, 0.51, 0.49, 0.47, 0.45, 0.43, 0.41, 0.39, 0.38, 0.36, 0.34, 0.33, 0.32, 0.3, 0.28, 0.27, 0.26, 0.24, 0.22, 0.21, 0.2, 0.18, 0.16, 0.15, 0.14, 0.13, 0.12, 0.1]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    
  },

  //跳转到分类项目
  toVB:function(e){
    console.log("eee:");
    console.log(e.target.dataset.type);
    wx.navigateTo({
      url: '../vb/vb?type='+e.target.dataset.type,
    })
  },

  //跳转到摄影
  toPhotography:function(){
    wx.navigateTo({
      url: '../photography/photography',
    })
  },

  //跳转到广告设计
  toDesign:function(){
    wx.navigateTo({
      url: '../design/design',
    })
  },

  //跳转到乐队演出
  toBand:function(){
    wx.navigateTo({
      url:'../band/band',
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