'use strict';

var express= require('express'),
	path = require('path'),
	pck = require('../package.json'),
	routes = require('../models/ROUTES.json'),
	router = express.Router();

if(process.env.NODE_ENV === 'development'){
	router.use(require('connect-livereload')());
	router.use(express.static(path.join(__dirname, '..', pck.config.app)));
	router.use(express.static(path.join(__dirname, '..', pck.config.tmp)));
	router.use(express.static(__dirname, '..')); // this is only required for sourcemaps
} else {
	// express will not actually serve any static files, this is just a fallback, nginx will take care of this
	router.use(express.static(path.join(__dirname, '..', pck.config.dist)));
}

router.use(function(req, res, next){

	var id = Object.keys(routes).filter(function(path){
		return routes[path].templateUrl === req.path;
	}) || '/', route = routes[path.normalize(req.path)] || routes[id]; // this is either a route identified by the request path or by the templateUrl of a route;

	req.data = {
		route: route,
		name: path.basename(route.templateUrl, path.extname(route.templateUrl))
	};

	// todo set route as a 404 route if it doesn't exist (but only paths, not files)

	next();
});

// parse all html files from their handlebar templates
router.get('/views/:filename.html', function(req, res){
	var view = require('../models/' + req.data.name);

	view({
		query: req.query
	}).then(function(view){
		res.render(req.params.filename, {
			layout: false,
			view: view
		});
	});

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