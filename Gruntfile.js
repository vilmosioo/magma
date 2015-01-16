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
		ngAnnotate: require('./grunt/ngAnnotate'),
		jshint: require('./grunt/jshint')
	});

	grunt.log.writeln('app/search/Search_controller.js');
	grunt.log.writeln(' ======================== ');
	if(grunt.file.isFile('app/search/Search_controller.js')){
		grunt.log.writeln(grunt.file.read('app/search/Search_controller.js'));
	}
	grunt.log.writeln(' ======================== ');
	grunt.file.recurse('app/search/', function(abspath, rootdir, subdir, filename){
		grunt.log.writeln(filename);
	});
	grunt.log.writeln(' ======================== ');

	grunt.registerTask('test', [
		'jshint'
	]);

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
		'test',
		'build',
		'express:dist'
	]);

	grunt.registerTask('default', [
		'build'
	]);
};