// pages/bannerList/bannerList.js
var api = require('../../config/api.js')
var app = getApp()
const limit = 10
Page({
  data: {    
    films: [],
    hasMore: true,
    showLoading: true,
    start: 0,
    or1:false,
    or2:true,
    inputVal:'',
    showYear:false,
    showTreatment:false,
    showMore:false,
    showRotate1:false,
    showRotate2:false,
    showRotate3:false,
    _year:'工作年限',
    _treatment:'薪资待遇',
    _more:'更多条件',
    options:null,
    year:[
      {
        "year":"不限",
        "id":"0"
      },
      {
        "year":"1年以上",
        "id":"1"
      },
      {
        "year":"2年以上",
        "id":"2"
      },
      {
        "year":"3年以上",
        "id":"3"
      },
      {
        "year":"4年以上",
        "id":"4"
      },
      {
        "year":"5年以上",
  
        "id":"5"
      },
      {
        "year":"6年以上",
        "id":"6"
      },
      {
        "year":"10年以上",
        "id":"7"
      }
    ],
    treatment: [
      {
        "treatment":"2000以下",
        "id":"0"
      },{
        "treatment":"2000-3000",
        "id":"1"
      },{
        "treatment":"3000-4000",
        "id":"2"
      },{
        "treatment":"4000-5000",
        "id":"3"
      },{
        "treatment":"5000-6000",
        "id":"4"
      },{
        "treatment":"6000-8000",
        "id":"5"
      },{
        "treatment":"8000-10000",
        "id":"6"
      }
    ],
  },
  onReady: function () {
    this.animation = wx.createAnimation()
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
  onLoad: function (options) {
    var page = this;
    page.setData({
          options: options,
        });
    this.initData();
    wx.showNavigationBarLoading();        //显示导航条加载动画
    wx.setNavigationBarTitle({            //跳转时修改标题
      title: page.data.options.title
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
  //显示搜索内容
  showSearch:function(){
    var page = this;
    page.setData({
      or1:true,
      or2:false
    })
  },
  returnSearch:function(){
    var page = this;
    page.setData({
      or1:false,
      or2:true,
      inputVal:''
    })
  },
  //清除input值
  removeVal:function(){
    var page = this;
    page.setData({
      inputVal:''
    })
  },
  //跳转详情
  viewDetail: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../detail/detail?id=' + ds.id + '&title=' + ds.title
    })
  },
  //关闭筛选和遮罩层
  closeShadow:function(){
    this.setData({
        showYear:false,
        showTreatment:false,
        showMore:false,
        showRotate1:false,
        showRotate2:false,
        showRotate3:false
    });
  },
  //工作年限
  workYear:function(){
    this.setData({
        showYear:!this.data.showYear,
        showRotate1:!this.data.showRotate1,
        showRotate2:false,
        showRotate3:false,
        showTreatment:false,
        showMore:false
    });
  },
  //工作年限选择
  selectYear:function(e){
    var val = e.currentTarget.dataset.year;
    var page = this;
    page.setData({
          _year: val,
        });
    page.closeShadow();
  },
  //薪资待遇
  treatment:function(){
    this.setData({
        showTreatment:!this.data.showTreatment,
        showRotate2:!this.data.showRotate2,
        showRotate1:false,
        showRotate3:false,
        showYear:false,
        showMore:false
    });
  },
  //薪资待遇选择
  selectTreatment:function(e){
    var val = e.currentTarget.dataset.treatment;
    var page = this;
    page.setData({
          _treatment: val,
        });
    page.closeShadow();
  },
  //更多条件
  more:function(){
      this.setData({
        showMore:!this.data.showMore,
        showRotate3:!this.data.showRotate3,
        showRotate1:false,
        showRotate2:false,
        showYear:false,
        showTreatment:false
    });
  },
})
