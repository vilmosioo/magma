'use strict';

var express= require('express'),
	path = require('path'),
	routes = require('../models/ROUTES.json'),
	Pr = require('bluebird'),
	util = require('util'),
	router = express.Router();

var _render = function(route, isTemplate){
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
			data.view = view;

			// a view can overwrite the routes title/description
			if(view._app){
				data.app.title = util.format(data.app.title, view._app.title);
				data.app.description = util.format(data.app.description, view._app.description);
			}

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

router.get('/views/:path?/:filename.html', _render(null, true));

module.exports = router;