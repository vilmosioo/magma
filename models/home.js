'use strict';

var route = require('./routes')['/'];

module.exports = {
	title: route.title,
	content: route.description
};