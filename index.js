'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    path = require('path'),
		exphbs  = require('express-handlebars'),
    pck = require('./package.json'),
		routes = require('./models/ROUTES.json'),
		dir = process.env.NODE_ENV === 'development' ? pck.config.app : pck.config.dist;

var app = express(),
	hbs = exphbs.create({
		defaultLayout: 'index',
		layoutsDir: path.join(__dirname, dir),
		partialsDir: path.join(__dirname, dir + '/views')
	});

app.set('views', path.join(__dirname, dir + '/views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(logger('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'development'){
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(__dirname, pck.config.app)));
		app.use(express.static(path.join(__dirname, pck.config.tmp)));
		app.use(express.static(__dirname)); // this is only required for sourcemaps
} else {
    // express will not actually serve any static files, this is just a fallback, nginx will take care of this
    app.use(express.static(path.join(__dirname, pck.config.dist)));
}

app.use(function(req, res, next){

	var id = Object.keys(routes).filter(function(path){
		return routes[path].templateUrl === req.path;
	}) || '/';

	req.data = {
		route: routes[path.normalize(req.path)] || routes[id] // this is either a route identified by the request path or by the templateUrl of a route
	};

	next();
});

// parse all html files from their handlebar templates
app.get('/views/:filename.html', function(req, res){
	res.render(req.params.filename, {
		layout: false,
		view: {
			title: req.data.route.title,
			content: req.data.route.description
		}
	});
});

// always return index.html
app.get('/:path?', function(req, res){
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
			content: route.description
		}
	});
});

var server = app.listen(process.env.OPENSHIFT_NODEJS_PORT || pck.config.port, process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1', function(){
    console.log('Server listening on ' + server.address().address + ':' + server.address().port);
});