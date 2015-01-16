'use strict';

var Pr = require('bluebird'),
	books = require('../../services/books'),
	querystring = require('querystring');

// @param type [search, list]
// search, q is required

module.exports = function(args){
	return new Pr(function(resolve, reject){
		books.search(querystring.escape(args.q)).then(function(books){
			resolve({
				books: books
			});
		}, reject);
	});
};