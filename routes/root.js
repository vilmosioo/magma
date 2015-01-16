'use strict';

var express= require('express'),
	path = require('path'),
	routes = require('../models/ROUTES.json'),
	router = express.Router();

router.use(function(req, res, next){
	var id = Object.keys(routes).filter(function(path){
		return routes[path].templateUrl === req.path;
	}) || '/', route = routes[req.path] || routes[id]; // this is either a route identified by the request path or by the templateUrl of a route;

	req.data = {
		route: route,
		name: path.basename(route.templateUrl, path.extname(route.templateUrl))
	};

	// todo set route as a 404 route if it doesn't exist (but only paths, not files)

	next();
});

// always return index.html
router.use(function(req, res){
	var route = req.data.route,
		name = req.data.name,
		view = require('../models/' + name);

	view({
		query: req.query
	}).then(function(view){
		res.render(name, {
			constants: {
				ROUTES: JSON.stringify(routes)
			},
			app: {
				title: route.title,
				description: route.description
			},
			view: view
		});
	});
});

module.exports = router;