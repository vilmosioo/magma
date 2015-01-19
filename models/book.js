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
		books.search(args.params.id).then(function(books){
			if(books.length === 1){
				data = books[0];

				// override route metadata
				data.app.title = books[0].title;
			}
		}, function(err){
			console.log(err);
		}).finally(function(){
			resolve(data);
		});
	});
};