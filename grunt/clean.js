'use stricts';

module.exports = {
	server: {
		src: ['<%= pck.config.tmp %>']
	},
	dist: {
		src: ['<%= pck.config.dist %>']
	}
};