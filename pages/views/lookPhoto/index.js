// pages/views/lookPhoto/index.js
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
      title: ''
    },
    pageTop: app.globalData.pageTop,
    image: {},
    album_id: '',
    type: ''
  },

  // 还原
  restoreHandler() {
    // todo start
    // http('user/dustbin_images_restore', 'post', {
    //   openid: app.getStorage('album_user_openid')
    //   album_id: this.data.album_id
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
  },
  // 下载
  downHandler() {
    // wx.downloadFile({  
    //   url: imgSrc,
    //   success: res => {
    //     wx.saveImageToPhotosAlbum({
    //       filePath: res.tempFilePath,
    //       success: () => {

    //       }
    //     })
    //   }
    // })
  },
  // 删除
  deleteHandler() {
    // todo start
    // http('user/dustbin_images_delete', 'post', {
    //   openid: app.getStorage('album_user_openid')
    //   album_id: this.data.album_id
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.imageId) {
      const id = JSON.parse(options.imageId)

      http('image/get?userId=1&id=' + id, "GET").then(res => {
        this.setData({
          image: res
        })
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      this.setData({
        type: options.type
      })
    }

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