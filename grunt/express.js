'use strict';

module.exports = {
	options: {
		script: 'index.js',
		output: 'Server listening .+'
	},
	server: {
		options:{
			node_env: 'development'
		}
	},
	dist: {
		options: {
			node_env: 'production',
			background: false
		}
	}
};