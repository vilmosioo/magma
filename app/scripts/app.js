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
	})
	.run(function($route, $rootScope, $window){
		var enabled = false;

		$rootScope.global = {
			routing: false
		};

		$rootScope.app = {
			title: '',
			description: ''
		};

		$rootScope.$on('$routeChangeStart', function(ev, currRoute){
			$rootScope.app.title = currRoute.$$route.title || '';
			$rootScope.app.description = currRoute.$$route.description || '';

			// fire on seconf routechange start
			// todo move this to mgview
			if(enabled){
				$rootScope.global.routing = true;
			}
			enabled = true;
		});

		$rootScope.$on('$routeChangeSuccess', function(){
			$window.scrollTo(0, 0);
		});
	});