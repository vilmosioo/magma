'use strict';

var goodreads = require('../services/goodreads'),
	Pr = require('bluebird');

module.exports = function(args){

	var data = {
		title: '[Author not found]',
		app: {
			title: '[Author not found]'
		}
	};

	return new Pr(function(resolve){
		goodreads.author(args.params.id || args.query.id).then(function(author){
			data = author;

			// override route metadata
			data.app = {
				title: author.name
			};
		}, function(err){
			console.log(err);
		}).finally(function(){
				resolve(data);
			});
	});
};