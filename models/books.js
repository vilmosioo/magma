'use strict';

var request = require('request-promise'),
	util = require('util'),
	SEARCH = 'https://www.googleapis.com/books/v1/volumes?q=%s&key=' + process.env.GOOGLE_KEY;

module.exports = {
	search: function(q){
		return request(util.format(SEARCH, q)).then(function(response){
			return JSON.parse(response);
		});
	}
};