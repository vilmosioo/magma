'use strict';

module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	var pck = grunt.file.readJSON('./package.json');

	// Define the configuration for all the tasks
	grunt.initConfig({
		pck: pck,
		clean: require('./grunt/clean'),
		copy: require('./grunt/copy'),
		express: require('./grunt/express'),
		watch: require('./grunt/watch'),
		open: require('./grunt/open'),
		useminPrepare: require('./grunt/useminPrepare'),
		usemin: require('./grunt/usemin'),
		filerev: require('./grunt/filerev'),
		sass: require('./grunt/sass'),
		ngAnnotate: require('./grunt/ngAnnotate')
	});

	grunt.registerTask('server', [
		'clean:server',
		'sass:server',
		'express:server',
		'open',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'sass:dist',
		'useminPrepare',
		'concat',
		'ngAnnotate',
		'uglify',
		'cssmin',
		'filerev',
		'copy',
		'usemin'
	]);

	grunt.registerTask('dist', [
		'build',
		'express:dist'
	]);

	grunt.registerTask('default', [
		'build'
	]);
};