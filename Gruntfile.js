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
		htmlmin: require('./grunt/htmlmin'),
		express: require('./grunt/express'),
		watch: require('./grunt/watch'),
		open: require('./grunt/open')
	});

	grunt.registerTask('server', [
		'clean:server',
		'express:server',
		'open',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'copy',
		'htmlmin'
	]);

	grunt.registerTask('dist', [
		'build',
		'express:dist'
	]);

	grunt.registerTask('default', [
		'build'
	]);
};