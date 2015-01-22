'use strict';

var express = require('express'),
	bodyParser = require('body-parser'),
	logger = require('morgan'),
	path = require('path'),
	exphbs  = require('express-handlebars'),
	pck = require('./package.json'),
	resources = require('./routes/static'),
	root = require('./routes/root'),
	notFound = require('./models/404'),
	md = require('marked'),
	fs = require('fs'),
	dir = process.env.NODE_ENV === 'development' ? pck.config.app : pck.config.dist;

var app = express(),
	hbs = exphbs.create({
		defaultLayout: 'index',
		layoutsDir: path.join(__dirname, dir),
		partialsDir: path.join(__dirname, dir + '/views'),
		helpers: {
			json: function(){
				var data = {};
				for(var i = 0, l = arguments.length; i < l; i++){
					var key = arguments[i];
					data[key] = this[key];
				}
				return JSON.stringify(data);
			},
			md: function(file){
				return md(fs.readFileSync(file, { encoding: 'utf8' }));
			}
		}
	});

app.set('views', path.join(__dirname, dir + '/views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(logger('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(resources);
app.use(root);
app.use(function(req, res){
	notFound().then(function(data){
		res.render('404', data);
	});
});

var server = app.listen(process.env.OPENSHIFT_NODEJS_PORT || pck.config.port, process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1', function(){
    console.log('Server listening on ' + server.address().address + ':' + server.address().port);
});