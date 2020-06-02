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
      background: '#404974',
      title: '新建相册'
    },
    pageTop: app.globalData.pageTop,
    fileType: 0, // 0共享 1私密
    albumType: 0, // 分类
    albumName: '',
    albumPassword: '',
    btnName: '邀请家人',
    eyesClose: true,
    isSubmit: false // 是否显示确定按钮（可以提交）
  },


  // 选择分类
  selectAlbumType(e) {
    this.setData({
      albumType: Number(e.currentTarget.dataset.type)
    })
  },

  changeEyes() {
    this.setData({
      eyesClose: !this.data.eyesClose
    })
  },



  selectFileType(e) {
    this.setData({
      fileType: Number(e.currentTarget.dataset.file),
      albumName: '',
      albumPassword: '',
      albumType: 0,
      btnName: Number(e.currentTarget.dataset.file) ? '确定' : '邀请家人'
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
  // 分享之后的动作
  clickShare() {
    this.setData({
      isSubmit: true
    })
  },
  // 创建相册
  creatAlbum() {
    var type = 2;
    if (this.data.fileType == 0) {
        type = 2;
    }
    if (this.data.fileType == 1) {
      type = 1;
    }

    http('album/create', 'post', {
      userId: app.getStorage('userId'),
      name: this.data.albumName,
      category: this.data.albumType,
      password: this.data.albumPassword,
      type: type
    }).then(res => {
      app.showToast('创建成功！')
      setTimeout(() => {
        wx.navigateBack()
      }, 500)
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
  onShareAppMessage: function (options) {
    if (options.from == 'button') {
      return {
        path: 'pages/tabbar/index?openid=' + app.getStorage('album_user_openid')
      }
    }
  }
})