'use strict';

var request = require('request-promise'),
	util = require('util'),
	Pr = require('bluebird'),
	xml2js = require('xml2js'),
	parser = Pr.promisify((new xml2js.Parser()).parseString),
	SEARCH = 'https://www.goodreads.com/search/index.xml?q=%s&key=' + process.env.GOODREADS_KEY;

module.exports = {
	search: function(q){
		if(!!q){
			console.log('Request => ' + util.format(SEARCH, q));
			return request(util.format(SEARCH, q))
				.then(function(response){
					return parser(response);
				}, function(err){
					console.log(err);
					return {
						items: []
					};
				})
				.then(function(response){
					return response.GoodreadsResponse.search[0].results[0].work;
				})
				.then(function(works){
					return works.map(function(work){
						return work.best_book[0];
					});
				})
				.then(function(books){
					return books.map(function(item){
						return {
							title: item.title[0],
							image: item.image_url[0].replace(/(\d+)[m,s]\//, '$1l/')
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