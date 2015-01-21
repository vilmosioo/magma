'use strict';

module.exports = {
	dist: {
		files: {
			'<%= pck.config.tmp %>/concat/scripts/app.js': ['<%= pck.config.tmp %>/concat/scripts/app.js'],
			'<%= pck.config.tmp %>/concat/scripts/magma.js': ['<%= pck.config.tmp %>/concat/scripts/magma.js']
		}
	}
};