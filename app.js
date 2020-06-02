//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.height = res.statusBarHeight
        this.globalData.pageTop = res.statusBarHeight * 2 + 20
      }
    })
    this.globalData.userInfo = this.getStorage('album_user_info')
  },
  // 登陆
  // 设置缓存
  setStorage(key, value) {
    wx.setStorageSync(key, value)
  },
  // 获取缓存数据
  getStorage(key) {
    return wx.getStorageSync(key)
  },
  // Toast
  showToast(e) {
    wx.showToast({
      title: e,
      icon: 'none',
      duration: 2000,
    });
  },
  // clone
  cloneDeep(val) {
    return JSON.parse(JSON.stringify(val))
  },
  showLoading(e = '加载中...') {
    wx.showLoading({
      title: e
    })
  },
  hideLoading() {
    wx.hideLoading()
  },
  globalData: {
    userInfo: null,
    navbarHeight: 0, // 导航栏的高度
    pageTop: 0 // 页面距离顶部的位置
  }
})