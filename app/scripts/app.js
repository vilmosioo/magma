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
				redirectTo: '/'
			});

		$httpProvider.interceptors.push('mgViewInterceptor');
		$httpProvider.interceptors.push('progressInterceptor');
	})
	.run(function($route, $rootScope, $window){
		var enabled = false;

		$rootScope.app = {
			title: '',
			description: ''
		};

		$rootScope.$on('$routeChangeStart', function(ev, currRoute){
			$rootScope.app.title = currRoute.$$route.title || '';
			$rootScope.app.description = currRoute.$$route.description || '';
		});

		$rootScope.$on('$routeChangeSuccess', function(){
			$window.scrollTo(0, 0);
		});
	});