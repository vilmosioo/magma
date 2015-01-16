'use strict';

var request = require('request-promise'),
	util = require('util'),
	Pr = require('bluebird'),
	SEARCH = 'https://www.googleapis.com/books/v1/volumes?q=%s&key=' + process.env.GOOGLE_KEY;

module.exports = {
	search: function(q){
		if(!!q){
			console.log('Request => ' + util.format(SEARCH, q));
			return request(util.format(SEARCH, q))
				.then(function(response){
					return JSON.parse(response);
				}, function(err){
					console.log(err);
					return {
						items: []
					};
				})
				.then(function(response){
					return response.items.map(function(item){
						return {
							title: item.volumeInfo.title,
							subtitle: item.volumeInfo.subtitle,
							image: item.volumeInfo.imageLinks.thumbnail,
							snippet: item.searchInfo.textSnippet
						}
					})
				});
		} else {
			return new Pr(function(resolve, reject){
				reject({
					error: 'Query must be specified'
				});
			});
		}
	}
};