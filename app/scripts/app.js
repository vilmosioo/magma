'use strict';

angular.module('Magma', ['ui.bootstrap', 'ngRoute'])
	.config(function($locationProvider, $routeProvider){
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

		// template-less routing to avoid using ng-view and its default behaviour
		$routeProvider
			.when('/', {
				template: 'Main',
				controller: function(){
					console.log('Main');
				}
			})
			.when('/views', {
				template: 'Views',
				controller: function(){
					console.log('Views');
				}
			})
			.otherwise({
				redirectTo: '/'
			});
	});