// pages/sensor_map/sensor_map.js
var app = getApp();
const util = require('../../utils/util.js');

var markermap = {};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [],
    polyline: [],
    controls: [{}],
    longitude: 113.298569,
    latitude: 23.095207,
    marker:{}
  },

  markertap(e) {
    console.log(e);
    //
    var marker = markermap[e.markerId];
    console.log('marker', marker);

    this.setData({
      marker: marker
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    app.getLocationInfo(function(locationInfo) {
      console.log('map', locationInfo);
      that.setData({
        longitude: locationInfo.longitude,
        latitude: locationInfo.latitude
      })
    })
    //设置地图大小
    app.getSystemInfo((width, height) => {
      that.setData({
        map_width: width,
        map_height: width
      })
    })

    that.setData({
      markers: util.markers
    })

    //清空
 
    markermap = {};;
    for (var i =0; i < util.markers.length; i++) {
      //
      markermap[util.markers[i].id] = util.markers[i];
    }
    /**
    if (markers.length > 0) {
      //console.log('onLoaddddddddddddd',markers);
      markers[0].iconPath = "/imgs/ic_position_sel.png";
      that.setData({
        markers: markers
      })
    }
    */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})