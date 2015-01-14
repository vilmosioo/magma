'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    path = require('path'),
		exphbs  = require('express-handlebars'),
    pck = require('./package.json'),
		routes = require('./models/routes'),
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

// parse all html files from their handlebar templates
app.get('/views/:filename.html', function(req, res){
	res.render(req.params.filename, {layout: false});
});

// always return index.html
app.get('/:path?', function(req, res){
	var template = routes['/' + req.params.path] || routes['/'];
	template = template.templateUrl;

	res.render(path.basename(template, path.extname(template)), {
		constants: {
			ROUTES: JSON.stringify(routes)
		}
	});
});

var server = app.listen(process.env.OPENSHIFT_NODEJS_PORT || pck.config.port, process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1', function(){
    console.log('Server listening on ' + server.address().address + ':' + server.address().port);
});