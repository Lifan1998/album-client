// pages/views/unlockAlbum/index.js

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
      title: '解锁密码'
    },
    album_pwd: '',
    album_id: '',
    is_self: '', // 是否是创建者
    pageTop: app.globalData.pageTop,
    pwsBlock: [{ value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }]
  },

  changeInput(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      ['pwsBlock[' + index + '].value']: e.detail.value
    })
    
  },

  submitHandler() {
    const item = this.data.pwsBlock.filter(item => item.value === '')
    if (item && item.length) {
      return app.showToast('密码输入不完整')
    } else {
      let pwd = ''
      this.data.pwsBlock.map(item => {
        pwd += item.value
      })
      if (pwd !== this.data.album_pwd) {
        return app.showToast('密码输入不正确')
      } else {
        wx.redirectTo({
          url: '/pages/views/albumDetail/index?album_id=' + this.data.album_id + '&title=' + this.data.title + '&is_self=' +this.data.is_self
        })
      }
    }

  },

  clearHandler() {
    const clone = app.cloneDeep(this.data.pwsBlock)
    clone.map(item => {
      item.value = ''
    })
    this.setData({
      pwsBlock: clone
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      album_id: options.album_id,
      album_pwd: options.album_pwd,
      title: options.title,
      is_self: options.is_self
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