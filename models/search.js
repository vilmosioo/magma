'use strict';

var route = require('./routes')['/search/'],
	books = require('./books'),
	Pr = require('bluebird');

module.exports = function(){
	return new Pr(function(resolve){
		resolve({
			title: route.title,
			books: [1,2]
		});
	});
};