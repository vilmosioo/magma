'use strict';

var route = require('./routes')['/about/'];

module.exports = {
	title: route.title,
	content: route.description
};