// pages/share/share.js
Page({
  data:{
    lng:113.9242519,
    lat:22.5244309,
    markers:[],
  },
  onLoad:function(options){
      console.log('onload');
  },
  onReady:function(){
    console.log('onready');
    this.getLocate();
  },
  onShow:function(){
    console.log('onshow');
    this.ajax();
  },
  onHide:function(){
    console.log('onhide');
  },
  onUnload:function(){
    console.log('onunload');
  },
  getLocate:function(){
    var that = this;
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        console.log(res);
        that.setData({lat:res.latitude,lng:res.longitude});
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  ajax:function(){
    wx.request({
      url: 'http://webapi.amap.com/maps?v=1.3&key=dd1d18ab35d1c5d5e9f2df8bd4810358"',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})