// pages/views/uploadPhoto/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarVal: {
      showCapsule: 1,
      isBack: 1,
      title: '传照片'
    },
    pageTop: app.globalData.pageTop,
    tempFilePath: [] // 临时图片地址
  },
  // 调用手机相册
  chooseImage() {
    wx.chooseImage({
      success: res => {
        const tempFilePath = JSON.parse(JSON.stringify(this.data.tempFilePath))
        tempFilePath.push(...res.tempFilePaths)
        this.setData({
          tempFilePath
        })
      }
    })
  },
  nextHandler() {
    if (!this.data.tempFilePath.length) {
      this.tipsUpload()
    } else {
      const pathList = app.cloneDeep(this.data.tempFilePath)
      wx.navigateTo({
        url: '../choosePhoto/index?pathList=' + pathList,
      })
    }
  },
  tipsUpload() {
    app.showToast('请上传至少一张图片')
  },
  // 删除图片
  deleteImage(e) {
    const index = e.currentTarget.dataset.index
    let tempFilePath = JSON.parse(JSON.stringify(this.data.tempFilePath))
    tempFilePath.splice(index, 1)
    this.setData({
      tempFilePath
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