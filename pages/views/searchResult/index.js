// pages/views/searchResult/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarVal: {
      showCapsule: 1,
      isBack: 1,
      title: '搜索结果'
    },
    pageTop: app.globalData.pageTop,
    albumList: [],
    albumType: '',
    years: '',
    currentType: '' // 分类 type years month
  },

  setYears(e) {
    this.setData({
      years: e.detail
    })
  },
  clearBtn() {
    this.setData({
      currentType: ''
    })
  },
  submitHandler() {
    this.setData({
      currentType: ''
    })
    app.showLoading('加载中')
    setTimeout(() => {
      app.hideLoading()
    }, 1000)
  },

  changeAlbumType(e) {
    this.setData({
      albumType: e.currentTarget.dataset.type
    })
  },

  changeSearchType(e) {
    this.setData({
      currentType: e.currentTarget.dataset.type
    })
  },

  // 获取相册
  getAlbumList() {
    // todo start
    // http('user/album_list', 'post', {
    //   openid: app.getStorage('album_user_openid')
    // }).then(res => {
    // this.setData({
    //   albumList: res
    // })
    // }).catch(err => {

    // })
    // todo end

    // mock start
    const mock_list = []
    for (let i = 1; i < 20; i++) {
      const img_url = 'temp_img' + parseInt(Math.random() * 3 + 1, 10) + '.png'
      const id = i
      const album_desc = 'xxxxxxxxx'
      const album_count = parseInt(Math.random() * 200)
      mock_list.push({
        img_url,
        id,
        album_desc,
        album_count,
        permiss: album_count % 2,
        album_pwd: 123456,
        is_self: album_count % 2
      })
    }
    this.setData({
      albumList: mock_list
    })
    // mock end
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAlbumList()
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