// pages/tabbar/index.js
const app = getApp()
import http from '../../config/http'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarVal: {
      showCapsule: 1,
      isSearch: 1,
      title: '家庭相册'
    },
    isLogin: false, // 用户是否登陆
    pageTop: app.globalData.pageTop,
    currentRoute: 'find' // 当前的页面 find: '发现' me: '我的'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userInfo = app.globalData.userInfo
    if (userInfo) {
      this.setData({
        isLogin: true
      })
    }
  },
  // 拉取用户信息
  bindGetUserInfo(res) {
    if (res.detail.userInfo) {
      this.loginHandler(res.detail.userInfo)
    }
  },

  // 登陆
  loginHandler(val) {
    wx.login({
      complete: (res) => {
        const code = res.code
        // 服务端根据code 去 调用微信api 换取用户的openid唯一标识
        // todo start
        // http('user/login', 'post', {
        //   code
        // }).then(res => {
        //   this.setData({
        //     isLogin: true
        //   })
        //   app.globalData.userInfo = val
        //   app.setStorage('album_user_info', val)
        //   app.setStorage('album_user_openid', openid)
        // }).catch(err => {

        // })
        // todo end
        app.setStorage('userId', 1)
        // mock start
        const mock_openid = 'xxxx'
        this.setData({
          isLogin: true
        })
        app.globalData.userInfo = val
        app.setStorage('album_user_info', val)
        app.setStorage('album_user_openid', mock_openid)
        // mock end
      },
    })
  },

  // 底部选择事件
  changeTabbar(e) {
    let navbarVal = {}
    if (!this.data.isLogin) return
    this.setData({
      currentRoute:  e.currentTarget.dataset.type
    })
    if (this.data.currentRoute === 'me') {
      navbarVal = {
        showCapsule: 1,
        isSearch: 0,
        dustbin: 1,
        setting: 1,
        title: '',
        background: '#424876'
      }
    }
    if (this.data.currentRoute === 'find') {
      navbarVal = {
        showCapsule: 1,
        isSearch: 1,
        title: '家庭相册'
      }
    }
    if (this.data.currentRoute === 'add') {
      navbarVal = {
        showCapsule: 1,
        isSearch: 1,
        title: '家庭相册'
      }
      wx.navigateTo({
        url: '/pages/views/uploadPhoto/index',
      })
    }
    this.setData({
      navbarVal
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
    let navbarVal = {}
    navbarVal = {
      showCapsule: 1,
      isSearch: 1,
      title: '家庭相册'
    }
    this.setData({
      currentRoute: 'find',
      navbarVal
    })
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