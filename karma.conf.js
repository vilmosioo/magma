// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

var fs= require('fs'),
	pck = JSON.parse(fs.readFileSync('./package.json').toString());

module.exports = function(config) {
	config.set({
		// base path, that will be used to resolve files and exclude
		basePath: '',

		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: [
			// jasmine matchers
			'node_modules/jasmine-expect/dist/jasmine-matchers.js',

			// libraries
			pck.config.app + '/components/angular/angular.js',
			pck.config.app + '/components/angular-animate/angular-animate.js',
			pck.config.app + '/components/angular-route/angular-route.js',
			pck.config.app + '/components/angular-mocks/angular-mocks.js',
			pck.config.app + '/components/angular-bootstrap/ui-bootstrap.js',
			pck.config.app + '/components/angular-bootstrap/ui-bootstrap-tpls.js',
			
			// the app
			pck.config.app + '/magma/**/*.js',
			pck.config.app + '/scripts/**/*.js',

			// the tests
			pck.config.test + '/spec/**/*.js'
		],

		// test results reporter to use
		// possible values: dots || progress || growl

		reporters: ['progress', 'coverage'],

		preprocessors: {
			// source files, that you wanna generate coverage for
			// do not include tests or libraries
			// (these files will be instrumented by Istanbul)
			'app/scripts/**/*.js': ['coverage']
		},

		// optionally, configure the reporter
		coverageReporter: {
			type : 'html',
			dir : 'coverage/'
		},

		// list of files / patterns to exclude
		exclude: [],

		// web server port
		port: 8080,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['PhantomJS'],

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true
	});
};