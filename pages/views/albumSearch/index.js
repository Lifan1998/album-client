// pages/views/albumSearch/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarVal: {
      showCapsule: 1,
      isBack: 1,
      background: '#313859',
      title: '搜索'
    },
    pageTop: app.globalData.pageTop,
    years: '',
    albumType: ''
  },

  setYears(e) {
    this.setData({
      years: e.detail
    })
  },
  jumpPage() {
    wx.navigateTo({
      url: '/pages/views/searchResult/index',
    })
  },

  changeAlbumType(e) {
    this.setData({
      albumType: e.currentTarget.dataset.type
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