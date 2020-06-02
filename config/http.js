
const baseUrl = 'http://localhost:8083/'

const http = (url, method, data, header) => {

  wx.showLoading({
    title: '加载中...'
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      data: data ? data : null,
      method: method,
      header: header ? header : { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        wx.hideLoading()
        console.log(url + ":" + res.data)
        resolve(res.data)
      },
      fail: function (res) {
        wx.hideLoading()
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 2000,
        });
        reject({ errormsg: '网络错误,请稍后重试', code: -1 });
      }
    })
  })

}
export default http