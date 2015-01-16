'use strict';

var route = require('./ROUTES.json')['/search/'],
	books = require('./templates/books'),
	Pr = require('bluebird');

module.exports = function(args){

	var data = {
		title: route.title,
		books: []
	};

	return new Pr(function(resolve){
		books({
			q: args.query.q
		}).then(function(view){
			data.books = view.books;
		}).finally(function(){
			resolve(data);
		});

	});
};