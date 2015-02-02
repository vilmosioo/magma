'use stricts';

module.exports = {
	static: {
		files: [{
			expand: true,
			cwd: '<%= pck.config.app %>',
			src: ['**/*.{handlebars,ico,html}'],
			dest: '<%= pck.config.dist %>'
		}, {
			expand: true,
			cwd: '<%= pck.config.app %>/components/bootswatch',
			src: ['fonts/*.{eot,svg,ttf,woff,woff2}'],
			dest: '<%= pck.config.dist %>'
		}]
	},
	magma: {
		files: {
			'magma.min.js': '<%= pck.config.dist %>/scripts/magma.js'
		}
	}
};