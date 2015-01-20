'use strict';

var Pr = require('bluebird'),
	goodreads = require('../../services/goodreads'),
	querystring = require('querystring');

// @param type [search, list]
// search, q is required

module.exports = function(args){
	return new Pr(function(resolve, reject){
		goodreads.search(querystring.escape(args.query.q)).then(function(books){
			resolve({
				books: books
			});
		}, reject);
	});
};