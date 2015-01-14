'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    path = require('path'),
		exphbs  = require('express-handlebars'),
    pck = require('./package.json');

var app = express(),
	hbs = exphbs.create({
		defaultLayout: 'index',
		layoutsDir: path.join(__dirname, pck.config.app),
		partialsDir: path.join(__dirname, pck.config.app + '/views')
	});

app.set('views', path.join(__dirname, pck.config.app + '/views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.enable('view cache');
app.use(logger('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'development'){
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(__dirname, pck.config.app)));
		app.use(express.static(path.join(__dirname, pck.config.tmp)));
		app.use(express.static(__dirname)); // this is only required for sourcemaps
    app.get('/:path?', function(req, res){
			res.render(req.params.path || 'home');
    });
} else {
    // express will not actually serve any static files, this is just a fallback, nginx will take care of this
    app.use(express.static(path.join(__dirname, pck.config.dist)));
		app.get('/:path?', function(req, res){
			res.render(req.params.path || 'home');
		});
}

var server = app.listen(process.env.OPENSHIFT_NODEJS_PORT || pck.config.port, process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1', function(){
    console.log('Server listening on ' + server.address().address + ':' + server.address().port);
});