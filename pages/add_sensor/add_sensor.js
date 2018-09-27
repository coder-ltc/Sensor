// pages/add_sensor/add_sensor.js
const util = require('../../utils/util.js');

var gourmet_address = "";
var gourmet_title = "";
var gourmet_desc = "";
var urls = [];
var headurl = "";//
var headurlIndex = 0;
var geopoint = null;
var MAX_PIC_LENGTH = 6;

var title;
var latitude;
var longitude

Page({

  /**
   * 页面的初始数据
   */
  data: {
    map_width: 380,
    map_height: 380,
    urls: [],
    total_pics_number: MAX_PIC_LENGTH
  },

  chooseLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: function (ret) {
        console.log('chooseLocation', ret)
        title = ret.name;
        longitude = ret.longitude
        latitude = ret.latitude
        gourmet_address = ret.address;
        gourmet_title = ret.name;
        that.setData({
          address: gourmet_address
          , title: gourmet_title
        })
        geopoint = {
          latitude: +ret.latitude //数值
          , longitude: +ret.longitude //数值
        }
      }
      , cancel: function () {
        geopoint = null;//退出之后对象清空
      }
    })
  },

  addSensor: function () {
    var that = this;
    if (title != undefined) {
      var marker = {
        id: util.markers.length + 1
        , iconPath: "/imgs/ic_position_nor.png"
        , longitude: longitude
        , latitude: latitude
        , width: 30
        , height: 30
        , title: title
      }
      //console.log('marker',marker);
      util.markers.push(marker);
      util.tipToast('添加烟感成功！');
      setTimeout(function () {
        wx.navigateBack({
          delta: 1
        })
      }, 1500)
    }
    
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    title = undefined;
    latitude = undefined;
    longitude = undefined
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.chooseLocation()
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