'use strict';

angular.module('Magma', ['ui.bootstrap', 'ngRoute'])
	.config(function($locationProvider, $routeProvider, ROUTES){
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

		for(var route in ROUTES){
			if(ROUTES.hasOwnProperty(route)){
				$routeProvider.when(route, ROUTES[route]);
			}
		}

		$routeProvider
			.otherwise({
				redirectTo: '/'
			});
	});