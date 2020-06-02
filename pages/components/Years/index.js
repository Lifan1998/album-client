// pages/components/Years/index.js
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
    value: '',
    years: ['2020','2019','2018','2017','2016','2015','2014','其他']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeYears(e) {
      this.triggerEvent('setYears', e.currentTarget.dataset.item)
      this.setData({
        value: e.currentTarget.dataset.item
      })
    }
  }
})
