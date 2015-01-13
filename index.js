'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    path = require('path'),
    pck = require('./package.json');

var app = express(),
    router = express.Router();

app.use(logger('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'development'){
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(__dirname, pck.config.app)));
		app.use(express.static(path.join(__dirname, pck.config.tmp)));
		app.use(express.static(__dirname)); // this is only required for sourcemaps
    app.use(function(req, res){
        res.sendFile(path.join(__dirname, pck.config.app) + '/index.html');
    });
} else {
    // express will not actually serve any static files, this is just a fallback, nginx will take care of this
    app.use(express.static(path.join(__dirname, pck.config.dist)));
    app.use(function(req, res){
        res.sendFile(path.join(__dirname, pck.config.dist) + '/index.html');
    });
}

var server = app.listen(process.env.OPENSHIFT_NODEJS_PORT || pck.config.port, process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1', function(){
    console.log('Server listening on ' + server.address().address + ':' + server.address().port);
});