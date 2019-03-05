// pages/publish/publish.js
Page({

  resetData:function(obj){
    if (this.data[obj] instanceof String){
      this.setData({
        [obj]: ''
      })
    }
    else{
      var tmp = {}
      for (var i in this.data[obj]){
        tmp[i] = ''
      }
      this.setData({
        [obj]: tmp
      })
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    showPrompt: false,
    current_index: 0,
    form:{
      date: '',
      region: '',
      brand: '',
      motor: ''
    },
    brand_arr: [
      {
        id: '1',
        name: '奔驰'
      },
      {
        id: '2',
        name: '宝马'
      },
      {
        id: '3',
        name: '林肯'
      },
      {
        id: '4',
        name: '雷克萨斯'
      }
    ],
    motor_arr: [
      {
        id: '1',
        name: 'X0'
      },
      {
        id: '2',
        name: 'X1'
      },
      {
        id: '3',
        name: 'X2'
      },
      {
        id: '4',
        name: 'X3'
      }
    ]
    
  },

  actionPublish: function () {
    this.selectComponent('#prompt').alert({
      title: '提示',
      message: '发布成功'
    })
    this.resetData('form');
  },
  bindSelectorChange:function(e){
    var type = e.target.dataset.type;

    this.setData({
      ['form.'+type]: e.detail.value
    })
  },
  handleTap: function (e) {
    var current = e.target.dataset.index;
    // console.log(e)
    this.setData({
      current_index: current
    })
  },
  handleChange: function(e){
    var current = e.detail.current;
    this.setData({
      current_index: current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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