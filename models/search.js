'use strict';

var route = require('./ROUTES.json')['/search/'],
	books = require('./templates/books'),
	Pr = require('bluebird');

module.exports = function(args){

	var data = {
		title: route.title,
		books: []
	}, param = {
		q: (args.query || {}).q
	};

	return new Pr(function(resolve){
		books(param).then(function(view){
			data.books = view.books;
		}).finally(function(){
			resolve(data);
		});

	});
};