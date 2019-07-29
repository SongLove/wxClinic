const upImg = (cloudPath, filePath, callbackFun) => { // 选择图片
  wx.cloud.uploadFile({
    cloudPath,
    filePath,
    success: res => {
      console.log('[上传文件] 成功：', res)
      callbackFun(res)
    },
    fail: e => {
      console.error('[上传文件] 失败：', e)
      wx.showToast({
        icon: 'none',
        title: '上传失败',
      })
    },
    complete: () => {
      wx.hideLoading()
    }
  })
}

module.exports = {
  upImg
}