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

	grunt.log.writeln(' ======================== ');
	if(grunt.file.isFile('app/scripts/controllers/Search_controller.js')){
		grunt.log.writeln(' => app/scripts/controllers/Search_controller.js');
		grunt.log.writeln(grunt.file.read('app/scripts/controllers/Search_controller.js'));
	}
	var fs = require('fs');
	grunt.log.writeln(fs.readFileSync('app/scripts/controllers/Search_controller.js'));
	grunt.log.writeln(' ======================== ');
	grunt.file.recurse('app/scripts/', function(abspath, rootdir, subdir, filename){
		grunt.log.writeln(subdir, filename);
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