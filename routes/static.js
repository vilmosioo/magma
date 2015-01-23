'use strict';

var express= require('express'),
	path = require('path'),
	pck = require('../package.json'),
	router = express.Router();

if(process.env.NODE_ENV === 'development'){
	router.use(require('connect-livereload')());
	router.use(express.static(path.join(__dirname, '..', pck.config.app)));
	router.use(express.static(path.join(__dirname, '..', pck.config.tmp)));
	router.use(express.static(path.join(__dirname, '..'))); // this is only required for sourcemaps
} else {
	// express will not actually serve any static files, this is just a fallback, nginx will take care of this
	router.use(express.static(path.join(__dirname, '..', pck.config.dist)));
}

module.exports = router;