'use strict';

var books = require('../services/books'),
	Pr = require('bluebird');

module.exports = function(args){

	var data = {
		title: '[Book not found]',
		app: {
			title: '[Book not found]'
		}
	};

	return new Pr(function(resolve){
		books.get(args.params.id || args.query.id).then(function(book){
			data = book;

			// override route metadata
			data.app = {
				title: book.title,
				description: book.description
			};
		}, function(err){
			console.log(err);
		}).finally(function(){
			resolve(data);
		});
	});
};