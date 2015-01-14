'use strict';

module.exports = {
	html: ['<%= pck.config.dist %>/{,*/}*.handlebars'],
	css: ['<%= pck.config.dist %>/{,*/}*.css'],
	js: ['<%= pck.config.dist %>/{,*/}*.js'],
	options: {
		assetsDirs: ['<%= pck.config.dist %>', '<%= pck.config.dist %>/images', '<%= pck.config.dist %>/styles/fonts']
	}
};