'use strict';

var route = require('./ROUTES.json')['/search/'],
	books = require('./templates/books'),
	extend = require('extend'),
	util = require('util'),
	Pr = require('bluebird');

module.exports = function(args){

	var data = {
		title: util.format(route.title, args.query.q),
		books: [],
		app: {
			title: util.format(route.title, args.query.q)
		}
	}, _defaults = {
		offset: 0,
		limit: 999
	};

	extend(args.query, _defaults);

	return new Pr(function(resolve){
		books(args).then(function(view){
			data.books = view.books;
		}).finally(function(){
			resolve(data);
		});

	});
};