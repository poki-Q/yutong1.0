// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:{},
    types:'',
    flag:3
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    //照片分类页面，点击具体分类时传过来的照片组id
    //获取全部照片组本地数据
    this.getType(e.id,e.type);  //调用函数  
    this.setData({
      types:e.type
    })

    
  },

  /**
   * 通过id从本地获取具体照主数据
   * id:分类id
  */
  getType:function(id,type){
    var typedata = {};
    
    if(type != 'items'){
      var types = wx.getStorageSync(type);
      //条件：传过来的id 通过这个id获取该类数据
      for (var i = 0; i < types.length; i++) {
        if (types[i].id == id) {
          typedata = types[i];
          console.log(typedata);
          break;
        }
      }
      //判断flag 设置标签值 
      if (typedata.sort == "photos"){
        this.setData({
          flag: 1,
        })
      }else if(typedata.sort == "designs"){
        this.setData({
          flag: 2,
        })
      }else{
        this.setData({
          flag: 3,
        })
      }

    }
    else{
      typedata = wx.getStorageSync('items');
    }
    this.setData({
      type:typedata,
    });
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