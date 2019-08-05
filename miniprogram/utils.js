const upImg = (cloudPath, filePath) => { // 选择图片
  return new Promise((resolve, rejece) => {
    wx.cloud.uploadFile({
      cloudPath,
      filePath,
      success: res => {
        console.log('[上传文件] 成功：', res)
        resolve(res.fileID)
      },
      fail: e => {
        console.error('[上传文件] 失败：', e)
        wx.showToast({
          icon: 'none',
          title: '上传失败',
        })
        rejece('上传失败')
      }
    })
  })
}

module.exports = {
  upImg
}