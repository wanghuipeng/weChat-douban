var config = require('../../config/config.js')
var message = require('../../config/message.js')
Page({
  data: {    
    items:[
      {text:'猫咪领养'},
      {text:'淘宝美工'}
    ],
    orSubmit:true,
    inputVal:''
  },
  onLoad: function(options) {
    console.log(options)
    this.setData({
      title: options.title
    })
  },
  //返回上一级
  goBack:function(){
    wx.navigateBack({
        delta: 1
      })
  },
 
  //监听搜索框的数据变化
  inputChange:function(e){
    var that = this
    var keyword = e.detail.value
    console.log(keyword);
    if (keyword.length > 0) {
      that.setData({
        orSubmit:false,   //按钮文字为为“确定”
      })
    } else{
      that.setData({
        orSubmit:true,    //按钮文字为为“取消”
      })
    }
  },
   //清除input值
  removeVal:function(){
    var page = this;
    page.setData({
      orSubmit:true,
      inputVal:''
    })
    wx.showToast({
      title: '数据清空！',
      icon: 'success',
      duration: 1500
    })
  },
  search: function(e) {
    var that = this
    var keyword = e.detail.value.keyword
    var searchUrl = that.data.searchType == 'keyword' ? config.apiList.search.byKeyword : config.apiList.search.byTag
    wx.navigateTo({
      url: '../searchResult/searchResult?url=' + encodeURIComponent(searchUrl) + '&keyword=' + keyword
    })
  },
})