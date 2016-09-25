//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {
      nickName: 'Walker',
      avatarUrl: '../../images/photo.jpg'
    },
    motto: 'Front-end Developer'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // console.log('onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  }
})
