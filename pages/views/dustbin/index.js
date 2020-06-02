// pages/views/dustbin/index.js
const app = getApp()
import http from '../../../config/http'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarVal: {
      showCapsule: 1,
      isBack: 1,
      background: '#313859',
      title: '回收站'
    },
    noData: {
      desc: '30天后，这里的文件会被清除',
      src: '/images/icon_dust_no_data.png'
    },
    pageTop: app.globalData.pageTop,
    dustbingList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDustbinList()
  },


  getDustbinList() {
    // todo start
    // http('user/dustbin_images', 'post', {
    //   openid: app.getStorage('album_user_openid')
    // }).then(res => {
    // this.setData({
    //   dustbingList: res
    // })
    // this.setData({
    //   albumList: res
    // })
    // }).catch(err => {

    // })
    // todo end

    // mock start
    http('image/getDeletedImageList?userId=' + app.getStorage('userId'), "GET").then(res => {
      this.setData({
        dustbingList: res
      })
    }).catch(err => {
      console.log(err)
    })
  },
  // 跳转单张页面
  jumpSingleImage(e) {
    wx.navigateTo({
      url: '/pages/views/lookPhoto/index?imageId=' + e.detail.id,
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