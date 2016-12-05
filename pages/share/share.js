// pages/share/share.js
Page({
  data:{
    lng:113.9242519,
    lat:22.5244309,
    markers:[
      //   {
      //   latitude:22.5244309,
      //   longitude:113.9242519,
      //   name:"xxx",
      //   desc:"深圳大学"
      // },
      {
        latitude:22.5344256,
        longitude:113.9342565,
        name:"肖兴星",
        desc:"深圳大学"
      }
    ],
    covers:[
      {
        latitude:22.5244309,
        longitude:113.9242519,
        iconPath:"../../image/pause.png"
      }
    ]
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
      url: 'https://rap.taobao.org/mockjs/6844/getRequest',
      method: 'GET', 
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