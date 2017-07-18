//home.js
var api = require('../../config/api.js')
var config = require('../../config/config.js')
var app = getApp()
const limit = 10
Page({
  data: {    
  	imgUrls: [
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    items:[
      {image:'../../image/item_1.png',title:'高工资'},
      {image:'../../image/item_2.png',title:'包吃住'},
      {image:'../../image/item_3.png',title:'当天进'},
      {image:'../../image/item_4.png',title:'所有职位'},
    ],
    films: [],
    hasMore: true,
    showLoading: true,
    start: 0,
    userInfo: {},
    or:true,
    cities:[
      {title:'A',name:['阿勒泰','阿坝州']},
      {title:'B',name:['百色','北京']},
      {title:'C',name:['长春','重庆']},
      {title:'D',name:['大连','大理']},
      {title:'E',name:['鄂尔多斯','鄂州']},
      {title:'F',name:['佛山','福州']},
      {title:'G',name:['贵阳','广州']},
      {title:'H',name:['惠州']}
    ],
    local_city:'...',
   
  },
  //事件处理函数
  toSearch: function() {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  // 初始化数据
  initData: function () {
    var page = this;

    var data = { start: 0, count: limit }
    var hasMore = true
    var imgs = new Array();
    api.requestGet('/in_theaters', data,
      function (res) {
        if (res.data.subjects.length == 0) {
          hasMore = false
        } else {
          for (var i = 0; i < 5; i++) {
            imgs = imgs.concat(res.data.subjects[i].images.large)
          }
        }

        page.setData({
          films: res.data.subjects,
          showLoading: false,
          hasMore: hasMore,
          start: res.data.subjects.length,
          swiperImgs: imgs
        })
      })
    
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      page.setData({
        userInfo:userInfo
      })
    })
  },

  // 加载更多数据
  loadMoreData: function () {
    var page = this;

    var data = { start: page.data.start, count: limit }
    var hasMore = true
    api.requestGet('/in_theaters', data,
      function (res) {
        if (res.data.subjects.length == 0) {
          hasMore = false
        }
        page.setData({
          films: page.data.films.concat(res.data.subjects),
          showLoading: false,
          hasMore: hasMore,
          start: page.data.start + res.data.subjects.length
        })

      })
  },

  // 下拉刷新
  onPullDownRefresh: function () {
    this.initData();
  },

  //onload
  onLoad: function () {
    var page = this;
    wx.showNavigationBarLoading();        //显示导航条加载动画
    this.initData();    
   
    //获得当前地理位置
    app.getCity(function(){
      page.setData({
          local_city:config.city
        })
		})
  },


  //滑到底
  scrolltolower: function () {
    var page = this;

    if (page.data.hasMore == false) {
      return;
    }

    page.loadMoreData()
  },

  //城市弹框
  cityPop: function () { 
    var page = this;
    var or = page.data.or;
     page.setData({
          or: !or,
        })
  },
  
  //城市选择
  citySelect: function (e) { 
    var val = e.currentTarget.dataset.city;
    var page = this;
    var or = page.data.or;
    page.setData({
          local_city: val,
          or: !or,
        });

    wx.showModal({
      content: "当前地址定位为"+config.city+"是否切换？",
      confirmText: "确定",
      cancelText: "取消",
      success: function(res) {
		    if (res.confirm) {
		      page.setData({
	          local_city:config.city
	        })
		    }
		  }
    })

  },

  //跳转详情
  viewDetail: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../detail/detail?id=' + ds.id + '&title=' + ds.title
    });


      
  
  }

})
