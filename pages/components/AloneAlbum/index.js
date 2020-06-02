// pages/components/AloneAlbum/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    photoList: {
      type: Array,
      default: [],
    },
    page: {
      type: String,
      default: '',
    }
  },
  observers: {
    photoList(val) {
      console.log(val)
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    lookImage(e) {
      if (this.properties.page === 'find') {
        const permiss = e.currentTarget.dataset.item.permiss
        // 需要密码
        if (permiss) {
          wx.navigateTo({
            url: '/pages/views/unlockAlbum/index?album_id=' + e.currentTarget.dataset.item.id + '&album_pwd=' + e.currentTarget.dataset.item.album_pwd+'&title=' + e.currentTarget.dataset.item.album_desc + '&is_self=' + e.currentTarget.dataset.item.is_self,
          })
        } else {
          wx.navigateTo({
            url: '/pages/views/albumDetail/index?album_id=' +  e.currentTarget.dataset.item.id + '&title=' + e.currentTarget.dataset.item.album_desc + '&is_self=' + e.currentTarget.dataset.item.is_self,
          })
        }
      } else {
        this.triggerEvent('lookImage', e.currentTarget.dataset.item)
      }
    }
  }
})
