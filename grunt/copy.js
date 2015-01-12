'use stricts';

module.exports = {
	build: {
		files: [{
			expand: true,
			cwd: '<%= pck.config.app %>',
			src: ['*.html'],
			dest: '<%= pck.config.dist %>'
		}]
	}
};