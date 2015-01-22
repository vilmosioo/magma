'use strict';

var books = require('../services/goodreads');

module.exports = function(args){

	var data = {
		title: '[Book not found]',
		app: {
			title: '[Book not found]'
		}
	};

	return books.get(args.params.id || args.query.id).then(function(book){
		data = book;

		// override route metadata
		data.app = {
			title: book.title,
			description: book.description.replace(/(<([^>]+)>)/ig,"").substring(0, 200),
			image: book.image
		};
		return data;
	});
};