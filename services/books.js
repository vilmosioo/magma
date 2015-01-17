'use strict';

var util = require('util'),
	Pr = require('bluebird'),
	books = require('googleapis').books('v1');

module.exports = {
	search: function(q){
		if(!!q){
			return Pr.promisify(books.volumes.list)({q: q, key: process.env.GOOGLE_KEY})
				.then(function(response){
					return response[0];
				})
				.then(function(response){
					return response.items.map(function(item){
						return {
							title: item.volumeInfo.title,
							subtitle: item.volumeInfo.subtitle,
							image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
							snippet: item.searchInfo ? item.searchInfo.textSnippet : ''
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