// pages/release/release.js
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
    userInfo: null,
    files: ''
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLoad() {
      let That = this
      this.setData({
        userInfo: app.globalData.userInfo
      })
      console.log(this.data.userInfo)
      const db = wx.cloud.database()
      db.collection('food_classify').get().then(res => {
        console.log(res)
      })
      // db.collection('food_classify').add({
      //   data: {
      //     due: new Date
      //   },
      //   success(res){
      //     console.log(res._id)
      //   }
      // })
    },
    chooseImage: function(e) {
      var that = this;
      wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          that.setData({
            files: res.tempFilePaths
          });
        }
      })
    },
    previewImage: function(e) {
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.data.files // 需要预览的图片http链接列表
      })
    },
    loginFun(e) {
      console.log(e)
      if (e.detail.errMsg === 'getUserInfo:fail auth deny') return
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: app.globalData.userInfo
      })
      let page = getCurrentPages()
    }
  }
})