'use strict';

var route = require('./ROUTES.json')['/search/'],
	books = require('./templates/books'),
	util = require('util'),
	querystring = require('querystring'),
	Pr = require('bluebird');

module.exports = function(args){

	var data = {
		title: util.format(route.title, args.query.q),
		books: []
	};

	return new Pr(function(resolve){
		books({
			q: args.query.q
		}).then(function(books){
			data.books = books;
		}).finally(function(){
			resolve(data);
		});

	});
};