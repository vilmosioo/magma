'use strict';

module.exports = {
	options: {
		jshintrc: '.jshintrc'
	},
	all: ['Gruntfile.js', '<%= pck.config.app %>/scripts/**/*.js', 'grunt/**/*.js', 'models/**/*.js', 'routes/**/*.js', 'test/**/*.js', '<%= pck.main %>']
};