var config = require('../../config/config.js')
var douban = require('../../config/fetch.js')

Page({
	data: {
		films: [],
		hasMore: true,
		showLoading: true,
		start: 0,
		url: '',
		keyword: '',
		isNull: false,
		nullTip: {
			tipText: 'sorry，没有找到您要的内容，换个关键词试试吧',
			actionText: '返回',
			routeUrl: '../../pages/search/search'
		}
	},
	onLoad: function(options) {
		var that = this
		that.setData({
			url: options.url,
			keyword: options.keyword,
			title: options.keyword
		})
		douban.search.call(that, that.data.url, that.data.keyword, that.data.start, config.count, function(data){
			if (data.subjects.length == 0) {
				that.setData({
					isNull: true
				})
			}
		})
	},
	onPullDownRefresh: function() {
		var that = this
		that.setData({
			films: [],
			hasMore: true,
			showLoading: true,
			start: 0
		})
		douban.search.call(that, that.data.url, that.data.keyword, that.data.start, config.count)
	},
	onReachBottom: function() {
		var that = this
		if (!that.data.showLoading) {
			douban.search.call(that, that.data.url, that.data.keyword, that.data.start, config.count)
		}
	},
	viewFilmDetail: function(e) {
		var data = e.currentTarget.dataset;
		wx.navigateTo({
			url: "../detail/detail?id=" + data.id
		})
	},
	
})