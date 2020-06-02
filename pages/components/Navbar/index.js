// pages/components/Navbar/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navbarData: {
      type: Object,
      default: {
        showCapsule: 1,
        isBack: 0, // 返回箭头
        isSearch: 0,
        isEdit: 0,
        dustbin: 1,
        setting: 1,
        background: '#313859'
      }
    }
  },

  observers: {
    'navbarData': function (val) {
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    height: '',
    // 默认值  默认显示左上角
    // navbarData: {
    //   showCapsule: 1
    // }
  },

  /**
   * 组件实例进入页面节点树时执行
   */
  attached: function () {
    // 定义导航栏的高度   方便对齐
    this.setData({
      height: app.globalData.height
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 返回上一页面
    _navback() {
      const pages=getCurrentPages()
      wx.navigateBack()
    },
    // 跳转垃圾箱页面
    dustbinHandler() {
      wx.navigateTo({
        url: '/pages/views/dustbin/index',
      })
    },
    edit() {
      this.triggerEvent('eidtHandler')
    },
    pageSearch() {
      wx.navigateTo({
        url: '/pages/views/albumSearch/index',
      })
    }
  }
})
