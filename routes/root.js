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
	}) || '/';

	req.data = {
		route: routes[path.normalize(req.path)] || routes[id] // this is either a route identified by the request path or by the templateUrl of a route
	};

	// todo set route as a 404 route if it doesn't exist (but only paths, not files)

	next();
});

// parse all html files from their handlebar templates
router.get('/views/:filename.html', function(req, res){
	res.render(req.params.filename, {
		layout: false,
		view: {
			title: req.data.route.title,
			content: req.data.route.description
		}
	});
});

// always return index.html
router.use(function(req, res){
	var template = req.data.route.templateUrl,
		route = req.data.route;

	res.render(path.basename(template, path.extname(template)), {
		constants: {
			ROUTES: JSON.stringify(routes)
		},
		app: {
			title: route.title,
			description: route.description
		},
		view: {
			title: route.title,
			content: route.description,
			books: [1, 2]
		}
	});
});

module.exports = router;