'use strict';

var express= require('express'),
	path = require('path'),
	routes = require('../models/ROUTES.json'),
	router = express.Router();

var _render = function(route, isTemplate){
	var model = require('../models/' + route.model),
		name = path.basename(route.templateUrl, path.extname(route.templateUrl));

	var data = !isTemplate ? {
		constants: {
			ROUTES: JSON.stringify(routes)
		},
		app: {
			title: route.title,
			description: route.description
		}
	} : {
		layout: false
	};

	return function(req, res){
		model({query: req.query}).then(function(view){
			data.view = view;
			res.render(name, data);
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

module.exports = router;