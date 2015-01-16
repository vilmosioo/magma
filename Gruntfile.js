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

	grunt.registerTask('log', function(){
		grunt.log.writeln(' => .tmp/concat/scripts/app.js');
		grunt.log.writeln(' ======================== ');
		if(grunt.file.isFile('.tmp/concat/scripts/app.js')){
			grunt.log.writeln(grunt.file.read('.tmp/concat/scripts/app.js'));
		}
		grunt.log.writeln(' ======================== ');

		grunt.log.writeln(' => app/scripts/controllers/Search_controller.js');
		grunt.log.writeln(' ======================== ');
		if(grunt.file.isFile('app/scripts/controllers/Search_controller.js')){
			grunt.log.writeln(grunt.file.read('app/scripts/controllers/Search_controller.js'));
		}
		grunt.log.writeln(' ======================== ');
	});

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
		'log',
		'useminPrepare',
		'log',
		'concat',
		'log',
		'ngAnnotate',
		'log',
		'uglify',
		'log',
		'cssmin',
		'filerev',
		'copy',
		'usemin',
		'log'
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