'use strict';

angular.module('Magma', ['ui.bootstrap'])
	.config(function($locationProvider){
		$locationProvider.html5Mode(true);
	})
	.run(function(){
		console.log('Application bootstrap.');
	});