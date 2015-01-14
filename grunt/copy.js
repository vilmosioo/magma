'use stricts';

module.exports = {
	all: {
		files: [{
			expand: true,
			cwd: '<%= pck.config.app %>',
			src: ['**/*.{handlebars,ico,html}'],
			dest: '<%= pck.config.dist %>'
		}]
	}
};