// pages/components/PageFind/index.js
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
    user: {},
    userList:[],
    albumUpdateInfo: {},
    albumList: []
  },

  ready() {
    this.getAlbumList()
    this.getAlbumUpdateInfo()
    this.getUserList()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 获取相册
    getAlbumList() {
      // todo start
      http('album/getRecentUpload?userId=' + app.getStorage('userId'), 'get').then(res => {
        this.setData({
          albumList: res
        })
      }).catch(err => {
        console.log(err)
      })
    },
    getUserList(){
      http('user/getRecentUpdateUserList?userId=' + app.getStorage('userId'), 'get').then(res => {
        var user = res.shift();
        this.setData({
          user: user,
          userList: res
        })
      }).catch(err => {
        console.log(err)
      })
    },
    getAlbumUpdateInfo() {
      http('album/updateInfo?userId=' + app.getStorage('userId'), 'get').then(res => {
        this.setData({
          albumUpdateInfo: res
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
})
