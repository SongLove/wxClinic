// pages/release/release.js
const app = getApp()
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
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: null,
    cookingTime: ['十分钟', '半小时', '一小时', '两小时', '两小时以上'], //烹饪时间
    cookingIndex: 0, // 烹饪时间当前选中
    multiArray: [], // 类别显示数据 [0][0]
    multiIndex: [0, 0], // 类别当前显示
    multiData: [], // 保存类别接口数据
    uploadObj: { // 传给后台的 菜谱数据
      files: '', // 大图
      foodName: '', // 菜名
      recommend: '', // 介绍
      stepFiles: [], // 步骤图
      materialArr: [], // 食材列表
      cookingTime: '', // 烹饪时间
      foodClassify: '', // 菜肴分类
      doohickey: '', // 小窍门
      difficulty: '', // 难度
      step: '', // 烹饪步骤
      due: ''
    },
    difficulty: [{
        name: '0',
        value: '容易'
      },
      {
        name: '1',
        value: '一般',
        checked: 'true'
      },
      {
        name: '2',
        value: '较难'
      }
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLoad() {
      let that = this
      this.setData({
        userInfo: app.globalData.userInfo
      })
      db.collection('food_classify').get().then(res => {
        let classify = res.data[0].classify // 类别数据
        let data = that.data.multiArray
        let newArr = []
        data[0] = classify.map((item, index) => {
          if (index === 0) newArr = item.classify_food
          return item.classify_name
        })
        data[1] = newArr
        that.setData({
          multiArray: data,
          multiData: classify
        })
      })
    },
    // 菜名
    changeFoodName(e) {
      this.setData({
        "uploadObj.foodName": e.detail.value
      })
    },
    // 介绍
    changeRecommend(e) {
      this.setData({
        "uploadObj.recommend": e.detail.value
      })
    },
    // 操作步骤
    changeStep(e) {
      this.setData({
        "uploadObj.step": e.detail.value
      })
    },
    // 小窍门
    changeDoohickey(e) {
      this.setData({
        "uploadObj.doohickey": e.detail.value
      })
    },
    // 烹饪时间
    bindCookingChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        cookingIndex: e.detail.value
      })
    },
    // 单选框
    changeDifficulty(e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value)
    },
    // 添加食材
    addMaterial() {
      let data = this.data.uploadObj.materialArr
      data.push({
        food: '',
        value: '',
        ind: data.length
      })
      this.setData({
        'uploadObj.materialArr': data
      })
      console.log(this.data.uploadObj.materialArr)
    },
    // 删除食材
    deleMaterial(e) {
      console.log(e.currentTarget.dataset.index)
      let data = this.data.uploadObj.materialArr
      data.splice(e.currentTarget.dataset.index, 1)
      this.setData({
        'uploadObj.materialArr': data
      })
    },
    bindMultiPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndex: e.detail.value
      })
    },
    bindMultiPickerColumnChange(e) {
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex,
        multiData: this.data.multiData
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          data.multiArray[1] = data.multiData[e.detail.value].classify_food
          data.multiIndex[1] = 0;
          break;
      }
      this.setData(data);
    },
    chooseImage(e) {
      let that = this;
      wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          if (e.currentTarget.dataset.name === 'stepFiles') {
            that.setData({
              "uploadObj.stepFiles": that.data.uploadObj.stepFiles.concat(res.tempFilePaths)
            });
          } else {
            that.setData({
              "uploadObj.files": res.tempFilePaths
            });
          }
        }
      })
    },
    previewImage: function(e) {
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.data.uploadObj.files // 需要预览的图片http链接列表
      })
    },
    previewstepFiles: function(e) {
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.data.uploadObj.stepFiles // 需要预览的图片http链接列表
      })
    },
    // 发布食谱
    addCookbook() {
      let that = this
      let data = this.data.difficulty.filter(item => {
        return item.checked
      })
      this.setData({
        "uploadObj.cookingTime": this.data.cookingTime[this.data.cookingIndex], // 烹饪时间
        "uploadObj.foodClassify": `${this.data.multiArray[0][this.data.multiIndex[0]]}，${this.data.multiArray[1][this.data.multiIndex[1]]}`, // 菜肴分类
        "uploadObj.difficulty": data,
        "uploadObj.due": new Date()
      })
      // for (let i in this.data.uploadObj) {
      //   console.log(this.data.uploadObj[i] instanceof Array, i)
      //   if (this.data.uploadObj[i] instanceof Array) {
      //     if (this.data.uploadObj[i].length == 0) {
      //       console.log('信息未填写完整')
      //       return
      //     }
      //   } else {
      //     if (!this.data.uploadObj[i]) {
      //       console.log('信息未填写完整')
      //       return
      //     }
      //   }
      // }
      console.log(this.data.uploadObj, data)
      wx.showLoading({
        title: '发表中',
      })
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000,
        success: () => {
          setTimeout(() => {
            wx.navigateTo({
              url: '../article/article',
              success(res) {
                // 保存当前提交的菜谱
                wx.setStorage({
                  key: 'ARTICLE',
                  data: that.data.uploadObj
                })
              }
            })
          }, 2000)
        }
      })
      // db.collection('articles').add({
      //   data: that.data.uploadObj,
      //   success(res) {
      //     console.log(res)
      //     // wx.hideLoading()
      //   },
      //   fail: console.error
      // })
    },
    getUserInfo(e) {
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