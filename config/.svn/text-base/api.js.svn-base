const config = require('config.js');

function requestGet(url,data,doSuccess,doFail,doComplete) {
    wx.request({
        url: getUrl(url),
        method: 'GET',
        data: data,
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res){
          if(typeof doSuccess == "function"){
              doSuccess(res);
              wx.hideNavigationBarLoading();    //隐藏导航条加载动画
          }
        },
        fail: function(res){
          if(typeof doFail == "function"){
              doFail(res);
          }
        },
        complete: function(res){
          if(typeof doComplete == "function"){
              doComplete(res);
          }
        }
    })
}

function requestPost(url,data,doSuccess,doFail,doComplete) {
    wx.request({
        url: getUrl(url),
        method: 'POST',
        data: data,
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res){
          if(typeof doSuccess == "function"){
              doSuccess(res);
          }
        },
        fail: function(res){
          if(typeof doFail == "function"){
              doFail(res);
          }
        },
        complete: function(res){
          if(typeof doComplete == "function"){
              doComplete(res);
          }
        }
    })
}

function getUrl(route){
    return 'https://' + config.host + config.basePath + route;
}


module.exports ={
   requestGet:requestGet,
   requestPost:requestPost,
   getUrl:getUrl
};
