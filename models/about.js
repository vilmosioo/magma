'use strict';

var route = require('./ROUTES.json')['/about/'],
	Pr = require('bluebird');

module.exports = function(){
	return new Pr(function(resolve){
		resolve({
			title: route.title,
			content: route.description
		});
	});
};