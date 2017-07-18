
Page({
  data:{
    film_history: [],
    person_history: [],
    show: 'film_history',
  },
  onLoad:function(options){
    var that = this
    wx.getStorage({
      key: 'film_history',
      success: function(res){
        that.setData({
          film_history: res.data
        })
      }
    })
    wx.getStorage({
      key: 'person_history',
      success: function(res){
        that.setData({
          person_history: res.data
        })
      }
    })
    wx.stopPullDownRefresh()
  },
	onPullDownRefresh: function() {
    this.setData({
      film_history: [],
      person_history: []
    })
		this.onLoad()
	},
  viewFilmDetail: function(e) {
		var data = e.currentTarget.dataset
		wx.navigateTo({
			url: "../detail/detail?id=" + data.id
		})
  },
  
})