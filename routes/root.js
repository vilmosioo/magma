'use strict';

var express= require('express'),
	path = require('path'),
	routes = require('../models/ROUTES.json'),
	Pr = require('bluebird'),
	extend = require('extend'),
	notFound = require('../models/404'),
	router = express.Router();

var _render = function(route, isTemplate){
	var data = !isTemplate ? {
		constants: {
			ROUTES: JSON.stringify(routes)
		},
		production: process.env.NODE_ENV !== 'development'
	} : {
		layout: false
	};

	if(route){
		data.app = {
			title: route.title,
			description: route.description
		};
	}

	return function(req, res){
		var name = !route ? path.join(req.params.path || '', req.params.filename) : path.basename(route.templateUrl, path.extname(route.templateUrl)), model;

		// the model for the view might not be defined
		try{
			model = require(path.join('../models/', name));
		} catch(e){
			model = function(){
				return Pr.resolve();
			};
		}

		model({query: req.query || {}, params: req.params || {}}).then(function(view){
			data = extend(data, view);

			Object.keys(data.app || {}).forEach(function(key){
				res.set('x-app-' + key, data.app[key]);
			});

			res.render(name, data);
		}, function(err){
			console.log(err);
			if(err.statusCode === 404){
				notFound().then(function(data){
					res.render('404', data);
				});
			} else {
				res.status(500).send('');
			}
		});
	};
};

for(var key in routes){
	if(routes.hasOwnProperty(key)){
		var route = routes[key];

		router.get(key, _render(route));
		router.get(route.templateUrl, _render(route, true));
	}
}

router.get('/views/:path?/:filename.html', _render(null, true));

module.exports = router;