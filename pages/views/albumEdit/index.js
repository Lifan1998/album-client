// pages/views/albumEdit/index.js
// pages/views/creatAlbum/index.js
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
      title: '编辑相册'
    },
    album_id: '',
    is_self: 0, // 是否是创建者
    pageTop: app.globalData.pageTop,
    fileType: 0, // 0共享 1私密
    albumType: 0, // 分类
    albumName: '',
    albumPassword: '',
    eyesClose: true,
    isSubmit: false, // 是否显示确定按钮（可以提交）
    album: {}
  },


  // 选择分类
  selectAlbumType(e) {
    let _category = 'album.category'
    this.setData({
      [_category]: Number(e.currentTarget.dataset.type)
    })
  },

  changeEyes() {
    this.setData({
      eyesClose: !this.data.eyesClose
    })
  },


  clearInput(e) {
    this.setData({
      [e.currentTarget.dataset.type]: ''
    })
  },

  changeInput(e) {
    this.setData({
      [e.currentTarget.dataset.type]: e.detail.value
    })
  },
  deleteAlbum() {
    http('album/delete?userId='+ app.getStorage('userId') + '&id=' + this.data.album_id, "GET").then(res => {
      console.log(res)
      app.showToast('删除相册成功')
      setTimeout(() => {
        wx.navigateBack()
      }, 500)
    }).catch(err => {
      console.log(err)
    })
  },
  updateAlbum() {
    console.log(this.data.album)
    http('album/update', 'post', this.data.album).then(res => {
      app.showToast('更新相册成功')
      setTimeout(() => {
        wx.navigateBack()
      }, 500)
    }).catch(err => {
      console.log(err)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {
      album_id,
      is_self
    } = options
    this.setData({
      album_id,
      is_self
    })

    http('album/get?userId=1&id=' + album_id, "GET").then(res => {
      this.setData({
        album: res
      })
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    this.setData({
      type: options.type
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
  onShareAppMessage: function (options) {
    if (options.from == 'button') {
      return {
        path: 'pages/tabbar/index?openid=' + app.getStorage('album_user_openid')
      }
    }
  }
})