// pages/components/PageMe/index.js
const app = getApp()
import http from '../../../config/http'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo: app.globalData.userInfo,
    spaceInfo: {}, // 用户空间信息
    albumList: [] // 相册列表
  },

  ready() {
    this.getSpace()
    this.getAlbumList()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取用户空间占用情况
    getSpace() {
      // todo start
      const mock_space = {
        user_space: 128,
        space_all: 1280
      }
      http('storage/info?userId=' + app.getStorage('userId'), "GET").then(res => {
      this.setData({
        spaceInfo: res
      })
      }).catch(err => {
          console.log(err)
      })
      // todo end

      // mock start
      
      this.setData({
        spaceInfo: mock_space
      })
      console.log(this.data)
      // mock end
    },
    // 获取相册
    getAlbumList() {
      http('album/listByUserId?userId=1', 'get').then(res => {
      this.setData({
        albumList: res
      })
      }).catch(err => {
        console.log(err)
      })
      // mock end
    }
  }
})
