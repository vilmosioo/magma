'use strict';

var routes = require('./ROUTES.json'),
	Pr = require('bluebird');

module.exports = function(){
	return new Pr(function(resolve){
		resolve({
			constants: {
				ROUTES: JSON.stringify(routes)
			},
			production: process.env.NODE_ENV !== 'development',
			app: {
				title: 'Not found'
			}
		});
	});
};