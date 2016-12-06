var app = getApp();
Page({
  data: {
    userInfo: {},
    animationData:{},
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      });
    })
  },

  onShow:function(){
      console.log('onshow');
      var animation = wx.createAnimation({
        duration: 10000,
        timingFunction: 'linear', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
        delay: 0,
        transformOrigin: '50% 50% 0',
      });

      this.animation = animation;
      animation.backgroundColor('yellow').step();
      this.setData({animationData:animation.export()});
      animation.backgroundColor('blue').step();
      this.setData({animationData:animation.export()});

  },

})