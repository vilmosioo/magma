'use strict';

var Pr = require('bluebird'),
	goodreads = require('../../services/goodreads'),
	querystring = require('querystring');

module.exports = function(args){
	return new Pr(function(resolve, reject){
		if(args.query.q){
			goodreads.search(querystring.escape(args.query.q), args.query).then(function(books){
				resolve({
					books: books.items,
					pagination: books.pagination
				});
			}, reject);
		} else if(args.query.author){
			goodreads.booksByAuthor(querystring.escape(args.query.author), args.query).then(function(books){
				resolve({
					books: books
				});
			}, reject);
		} else if(args.query.similar){
			goodreads.similarBooks(querystring.escape(args.query.similar), args.query).then(function(books){
				resolve({
					books: books
				});
			}, reject);
		} else {
			resolve();
		}

	});
};