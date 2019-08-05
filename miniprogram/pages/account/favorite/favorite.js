// pages/account/favorite/favorite.js
const db = wx.cloud.database()
const _ = db.command
const app = getApp()
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
    collectList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad() {
      let that = this
      wx.showLoading()
      db.collection('mini_posts').where({
        _openid: app.globalData.openid
      }).get({
        success(list) {
          console.log(list)
          let data = list.data
          console.log(data[0].collect)
          if (data.length) {
            if (data[0].collect.length) {
              that.setData({
                collectList: data[0].collect
              })
              wx.hideLoading()
            }
          }
        }
      })
    }
  }
})