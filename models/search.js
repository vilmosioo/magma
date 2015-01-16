'use strict';

var route = require('./ROUTES.json')['/search/'],
	books = require('./books'),
	Pr = require('bluebird');

module.exports = function(args){
	var data = {
		title: route.title,
		books: []
	};

	return new Pr(function(resolve){
		books.search(args.query.q).then(function(response){
			data.books = response.items.map(function(item){
				return {
					id: item.id,
					title: item.volumeInfo.title
				};
			});
		}, function(err){
			console.log(err);
		}).finally(function(){
			resolve(data);
		});

	});
};