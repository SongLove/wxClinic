//index.js
const app = getApp()
const db = wx.cloud.database()
const util = require('../../utils.js')

Page({
  data: {
    screenWidth: 0,
    screenHeight: 0,
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    slideSwiper: {
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      indicatorDots: true,
      autoplay: true,
      circular: true,
      interval: 3000,
      duration: 500
    },
    boxCurrent: 0,
    articleList: [],
    isShow: false
  },
  changeData(e) {
    this.setData({
      boxCurrent: e.currentTarget.dataset.index
    })
  },
  swiperChange(e) {
    this.setData({
      boxCurrent: e.detail.current
    })
  },
  onShow() {
    let that = this
    // 获取文章列表
    db.collection('articles').get({
      success(res) {
        let data = res.data
        data.show = false
        that.setData({
          articleList: res.data
        })
        if (!that.data.isShow) {
          console.log(that.data.isShow)
          that.lazyLoad()
          that.setData({
            isShow: true
          })
        }
      }
    })
    this.setData({
      screenWidth: wx.getSystemInfoSync().windowWidth,
      screenHeight: wx.getSystemInfoSync().windowHeight
    })
  },
  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  lazyLoad() {
    //滚动距离+屏幕高度换算vw倍数
    let height = this.data.screenHeight
    let articleList = this.data.articleList
    wx.createSelectorQuery().selectAll('.list ').boundingClientRect((ret) => {
      ret.forEach((item, index) => {
        if (item.top <= height) {
          // 判断是否在显示范围内
          articleList[index].show = true // 根据下标改变状态
        }
      })
      this.setData({
        articleList
      })
    }).exec()
  },
  // 滚动事件 
  onPageScroll() {
    this.lazyLoad()
  },
  // 查看详情
  goArticle(e) {
    db.collection('articles').where({
      _id: e.currentTarget.dataset.id
    }).get({
      success(res) {
        wx.setStorage({
          key: 'ARTICLE',
          data: res.data[0],
        })
        wx.navigateTo({
          url: '../article/article',
        })
      }
    })
  },
  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },
  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },
  // 上传图片
  doUpload() {
    let That = this
    wx.chooseImage({
      count: 9,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        wx.showLoading({
          title: '上传中',
        })
        const filePath = res.tempFilePaths[0]
        // 上传图片
        const cloudPath = Date.parse(new Date()) / 1000 + 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        util.upImg(cloudPath, filePath, That.call)
      },
      fail: e => {
        console.error(e)
      }
    })
  },
  call(res) {
    console.log('call', res)
  }
})