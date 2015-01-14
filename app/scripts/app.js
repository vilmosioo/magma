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
				templateUrl: '/views/home.html',
				controller: function(){
					console.log('Main');
				}
			})
			.when('/views', {
				templateUrl: '/views/views.html',
				controller: function(){
					console.log('Views');
				}
			})
			.otherwise({
				redirectTo: '/'
			});
	});