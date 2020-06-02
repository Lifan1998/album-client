// pages/views/albumDetail/index.js

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
      title: '',
      isEidt: 1
    },
    is_self: 0,
    pageTop: app.globalData.pageTop,
    album_id: '',
    photoList: []
  },


  getDustbinList() {
    // todo start
    // http('user/look_album', 'post', {
    //   openid: app.getStorage('album_user_openid')
    // album_id
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

    http('album/get?userId=' + app.getStorage('userId') + '&id=' + this.data.album_id, "GET").then(res => {
      this.setData({
        photoList: res.image_list
      })
    }).catch(err => {
      console.log(err)
    })
  },
  eidtHandler() {
    wx.navigateTo({
      url: '/pages/views/albumEdit/index?album_id=' + this.data.album_id + '&is_self=' + this.data.is_self,
    })
  },
  jumpSingleImage(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/views/lookPhoto/index?imageId=' + e.detail.id + '&type=eidt',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {
      album_id,
      title,
      is_self
    } = options
    this.setData({
      'navbarVal.title': title,
      album_id,
      is_self
    })
    this.getDustbinList()
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