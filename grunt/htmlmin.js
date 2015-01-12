'use stricts';

module.exports = {
	options: {
		removeCommentsFromCDATA: true,
		// https://github.com/yeoman/grunt-usemin/issues/44
		//  collapseWhitespace: true,
		collapseBooleanAttributes: true,
		removeAttributeQuotes: true,
		removeRedundantAttributes: true,
		useShortDoctype: true,
		removeEmptyAttributes: true,
		removeOptionalTags: true
	},
	build: {
		files: [{
			expand: true,
			cwd: '<%= pck.config.dist %>',
			src: ['**/*.html'],
			dest: '<%= pck.config.dist %>'
		}]
	}
};