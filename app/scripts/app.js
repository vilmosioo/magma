'use strict';

angular.module('Magma', ['ui.bootstrap', 'ngRoute'])
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
		$rootScope.global = {
			routing: false
		};

		$rootScope.app = {
			title: '',
			description: ''
		};

		var unbind = $rootScope.$on('$locationChangeStart', function(ev, newState, oldState){
			if(newState.charAt(newState.length - 1) === '/'){
				newState = newState.slice(0, newState.length - 1);
			}

			if(oldState.charAt(oldState.length - 1) === '/'){
				oldState = oldState.slice(0, oldState.length - 1);
			}

			if(newState !== oldState){
				$rootScope.global.routing = true;
				unbind();
			}
		});

		$rootScope.$on('$routeChangeStart', function(ev, currRoute){
			$rootScope.app.title = currRoute.$$route.title || '';
			$rootScope.app.description = currRoute.$$route.description || '';
		});

		$rootScope.$on('$routeChangeSuccess', function(){
			$window.scrollTo(0, 0);
		});
	});