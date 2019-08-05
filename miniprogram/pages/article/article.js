// pages/article/article.js
const db = wx.cloud.database()
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
    article: {},
    isCollect: false,
    isLike: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad() {
      let that = this
      wx.showLoading({
        title: '加载中',
      })
      wx.getStorage({
        key: 'ARTICLE',
        success: function(res) {
          if (res.data) {
            that.setData({
              article: res.data
            })
          }
          setTimeout(() => {
            wx.hideLoading()
          }, 1000)
          console.log(that.data.article)
        },
      })
      // 获取此用户收藏的帖子
      db.collection('mini_posts').where({}).get().then(res => {
        if (res.data.length) {
          let data
          let data2
          res.data[0].collect.forEach((item) => {
            if (item._id === that.data.article._id) data = true
          })
          res.data[0].like.forEach((item) => {
            if (item._id === that.data.article._id) data2 = true
          })
          that.setData({
            isCollect: data || that.data.isCollect
          })
          that.setData({
            isLike: data2 || that.data.isLike
          })
          console.log(that.data.isCollect)
          console.log(that.data.isLike)
        }
      })
    },
    onUnload() {
      wx.removeStorage({
        key: 'ARTICLE'
      })
      wx.switchTab({
        url: '../index/index',
      })
    },
    previewImage: function(e) {
      wx.previewImage({
        current: e.currentTarget.dataset.id, // 当前显示图片的http链接
        urls: this.data.article.stepFiles // 需要预览的图片http链接列表
      })
    },
    // 点赞帖子
    likeAndCollectArticle(e) {
      let that = this
      let articleId = e.currentTarget.dataset.id
      const _ = db.command
      const dbMini = db.collection('mini_posts')
      console.log(articleId)
    },
    // 收藏帖子
    likeAndCollectArticle(e) {
      wx.showLoading({
        title: '',
      })
      let that = this
      let articleId = e.currentTarget.dataset.id
      let type = e.currentTarget.dataset.type
      const _ = db.command
      const dbMini = db.collection('mini_posts')
      console.log(articleId)
      // 查看是否有收藏记录
      dbMini.get().then(res => {
        console.log(res)
        if (!res.data.length) {
          // 没有则创建
          let data
          if (type === 'collect') {
            data = {
              collect: [that.data.article],
              like: [],
              due: new Date()
            }
          } else if (type === 'like') {
            data = {
              collect: [],
              like: [that.data.article],
              due: new Date()
            }
          }
          dbMini.add({
            data
          })
        } else {
          // 有则添加，如果有重复的 表示取消收藏
          let item
          let isUp = true
          let data
          if (type === 'collect') {
            item = res.data[0].collect
          } else if (type === 'like') {
            item = res.data[0].like
          }
          item.forEach((list, i) => {
            if (list._id === articleId) {
              item.splice(i, 1)
              isUp = false
            }
          })
          dbMini.doc(res.data._id).update({
            data: {
              [type]: isUp ? _.unshift(that.data.article) : item,
              due: new Date()
            }
          }).then((res) => {
            let text
            if (type === 'collect') {
              that.setData({
                isCollect: !that.data.isCollect
              })
              text = that.data.isCollect ? '收藏成功' : '取消收藏'
            } else if (type === 'like') {
              that.setData({
                isLike: !that.data.isLike
              })
              text = that.data.isLike ? '点赞成功' : '取消点赞'
            }
            wx.showToast({
              title: text,
              icon: 'none'
            })
          })
        }
      })
    }
  }
})