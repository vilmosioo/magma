'use strict';

angular.module('Magma', ['ui.bootstrap', 'ngRoute', 'ngAnimate'])
	.config(function($locationProvider, $httpProvider, $routeProvider, ROUTES){
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
				templateUrl: '/views/404.html'
			});

		$httpProvider.interceptors.push('mgViewInterceptor');
		$httpProvider.interceptors.push('progressInterceptor');
		$httpProvider.interceptors.push('appInterceptor');
	})
	.run(function($route, $rootScope, $window){
		$rootScope.app = {
			title: '',
			description: ''
		};

		$rootScope.$on('$routeChangeSuccess', function(){
			$window.scrollTo(0, 0);
		});
	});