// pages/components/Slider/index.js
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
    leftTouchX: 0,
    leftMonth: 1,
    leftPosition: 53,
    rightPosition: 335,
    rightMonth: 12
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChangeLeftX(e) {
      const length = parseInt(335 / 12)
      this.setData({
        leftMonth: Math.ceil(e.detail.x / length) + 1
      })
      console.log(e.detail.x)
    },
    onChangeRightX(e) {
      const length = parseInt(335 / 12)
      const rightMonth = Math.ceil(e.detail.x / length) + 1
      this.setData({
        rightMonth
      })
    },
  }
})
