// pages/article/article.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad() {
      wx.getStorage({
        key: 'ARTICLE',
        success: function(res) {
          console.log('文章', res)
        },
      })
    },
    onUnload() {
      wx.removeStorage({
        key: 'ARTICLE'
      })
      wx.switchTab({
        url: '../index/index',
      })
    }
  }
})