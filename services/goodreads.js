'use strict';

var request = require('request-promise'),
	util = require('util'),
	Pr = require('bluebird'),
	xml2js = require('xml2js'),
	parser = Pr.promisify((new xml2js.Parser()).parseString),
	SEARCH = 'https://www.goodreads.com/search/index.xml?q=%s&key=' + process.env.GOODREADS_KEY,
	GET = 'https://www.goodreads.com/book/show/%s?key=' + process.env.GOODREADS_KEY,
	AUTHOR = 'https://www.goodreads.com/author/show/%s.xml?key=' + process.env.GOODREADS_KEY,
	BOOKS_BY_AUTHOR = 'https://www.goodreads.com/author/list/%s.xml?key=' + process.env.GOODREADS_KEY;

var _formatBook = function(book){
	var obj = ['id', 'isbn', 'title', 'isbn13', 'description', 'publisher', 'average_rating', 'num_pages'].reduce(function(obj, current){
		obj[current] = book[current][0];
		return obj;
	}, {});
	obj.publicationDate = new Date(book.publication_year[0], book.publication_month[0], book.publication_day[0]);
	obj.image = book.image_url[0].replace(/(\d+)[m,s]\//, '$1l/');
	obj.authors = book.authors.map(function(item){
		var author = item.author[0];
		return ['name', 'image_url', 'average_rating', 'id'].reduce(function(o, current){
			o[current] = author[current][0];
			return o;
		}, {})
	});
	return obj;
};

module.exports = {
	booksByAuthor: function(id){
		if(!!id){
			console.log('Request => ' + util.format(BOOKS_BY_AUTHOR, id));
			return request(util.format(BOOKS_BY_AUTHOR, id), {
				rejectUnauthorized: false
			})
				.then(function(response){
					return parser(response);
				}, function(err){
					console.log(err);
				})
				.then(function(response){
					return response.GoodreadsResponse.author[0];
				})
				.then(function(author){
					return author.books[0].book.slice(0, 12).map(_formatBook);
				});
		} else {
			return new Pr(function(resolve, reject){
				reject({
					error: 'ID must be specified'
				});
			});
		}
	},
	author: function(id){
		if(!!id){
			console.log('Request => ' + util.format(AUTHOR, id));
			return request(util.format(AUTHOR, id), {
				rejectUnauthorized: false
			})
				.then(function(response){
					return parser(response);
				}, function(err){
					console.log(err);
				})
				.then(function(response){
					return response.GoodreadsResponse.author[0];
				})
				.then(function(author){
					var obj = ['id', 'name', 'about'].reduce(function(obj, current){
						obj[current] = author[current][0];
						return obj;
					}, {});
					obj.fans_count = author.fans_count[0]._;
					obj.image = author.image_url[0];
					return obj;
				});
		} else {
			return new Pr(function(resolve, reject){
				reject({
					error: 'ID must be specified'
				});
			});
		}
	},
	get: function(id){
		if(!!id){
			console.log('Request => ' + util.format(GET, id));
			return request(util.format(GET, id), {
					rejectUnauthorized: false
				})
				.then(function(response){
					return parser(response);
				}, function(err){
					console.log(err);
				})
				.then(function(response){
					return response.GoodreadsResponse.book[0];
				})
				.then(_formatBook);
		} else {
			return new Pr(function(resolve, reject){
				reject({
					error: 'ID must be specified'
				});
			});
		}
	},
	search: function(q){
		if(!!q){
			console.log('Request => ' + util.format(SEARCH, q));
			return request(util.format(SEARCH, q), {
					rejectUnauthorized: false
				})
				.then(function(response){
					return parser(response);
				}, function(err){
					console.log(err);
					return {
						items: []
					};
				})
				.then(function(response){
					return response.GoodreadsResponse.search[0].results[0].work;
				})
				.then(function(works){
					return works.map(function(work){
						return work.best_book[0];
					});
				})
				.then(function(books){
					return books.map(function(item){
						return {
							id: item.id[0]._,
							title: item.title[0],
							image: item.image_url[0].replace(/(\d+)[m,s]\//, '$1l/')
						}
					});
				});
		} else {
			return new Pr(function(resolve, reject){
				reject({
					error: 'Query must be specified'
				});
			});
		}
	}
};