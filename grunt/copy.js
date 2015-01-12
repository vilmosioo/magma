'use stricts';

module.exports = {
	html: {
		files: [{
			expand: true,
			cwd: '<%= pck.config.app %>',
			src: ['**/*.html'],
			dest: '<%= pck.config.dist %>'
		}]
	}
};