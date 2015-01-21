'use strict';

var goodreads = require('../services/goodreads'),
	util = require('util'),
	route = require('./ROUTES.json')['/author/:id'];

module.exports = function(args){

	var data = {
		title: '[Author not found]',
		app: {
			title: '[Author not found]'
		}
	};

	return goodreads.author(args.params.id || args.query.id).then(function(author){
		data = author;

		// override route metadata
		data.app = {
			title: util.format(route.title, author.name)
		};

		return data;
	});
};