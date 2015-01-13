'use strict';

module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: '<%= pck.config.app %>/styles',
			src: ['**/*.scss'],
			dest: '<%= pck.config.tmp %>/styles',
			ext: '.css'
		}]
	},
	server: {
		options: {
			sourceMap: true
		},
		files: [{
			expand: true,
			cwd: '<%= pck.config.app %>/styles',
			src: ['**/*.scss'],
			dest: '<%= pck.config.tmp %>/styles',
			ext: '.css'
		}]
	}
};