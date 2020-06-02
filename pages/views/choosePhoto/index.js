// pages/views/choosePhoto/index.js
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
      title: '选相册'
    },
    pageTop: app.globalData.pageTop,
    albumList: [],
    filePath: [] // 图片临时路径
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.pathList) {
      this.setData({
        filePath: options.pathList.split(',')
      })
    }
    this.getAlbumList()
  },

  // 选择相册item
  chooseAlbumItem(e) {
    const cloneAlbumList = JSON.parse(JSON.stringify(this.data.albumList))
    cloneAlbumList.map(item => {
      item.active = false
      if (item.id === e.currentTarget.dataset.id) {
        item.active = true
      }
    })
    this.setData({
      albumList: cloneAlbumList
    })
  },

  jumpPage() {
    wx.navigateTo({
      url: '../creatAlbum/index',
    })
  },

  // 上传图片
  uplaodFile() {
    const itemActive = this.data.albumList.filter(item => item.active)
    if (!this.data.albumList.length || !itemActive || !itemActive.length) {
      app.showToast('请选择相册')
    } else {

      // todo start
      // const album_id = this.data.albumList.filter(item => item.active)[0].id
      // http('user/upload_image_album', 'post', {
      //   openid: app.getStorage('album_user_openid')
      // album_id,
      // file_path: this.data.filePath
      // }).then(res => {
      // app.showToast('上传成功！')
      // setTimeout(() => {
      //   wx.reLaunch({
      //     url: '/pages/tabbar/index',
      //   })
      // }, 500)
      // this.setData({
      //   albumList: res
      // })
      // }).catch(err => {

      // })
      // todo end

      // mock start
      app.showLoading()
      setTimeout(() => {
        app.hideLoading()
        app.showToast('上传成功！')
        setTimeout(() => {
          wx.reLaunch({
            url: '/pages/tabbar/index',
          })
        }, 500)
      }, 1000)
      // mock end

    }
  },

  // 获取相册
  getAlbumList() {
    // todo start
    // http('user/album_list', 'post', {
    //   openid: app.getStorage('album_user_openid')
    // }).then(res => {
    // res.map(item => {
    //   item.active = false
    // })
    // this.setData({
    //   albumList: res
    // })
    // }).catch(err => {

    // })
    // todo end

    // mock start

    http('album/listByUserId?userId=' + app.getStorage('userId'), 'get').then(res => {
      this.setData({
        albumList: res
      })
    }).catch(err => {
      console.log(err)
    })
    // mock end
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
    this.getAlbumList()
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