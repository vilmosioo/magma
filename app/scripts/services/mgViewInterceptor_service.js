'use strict';

angular.module('Magma')
	.factory('mgViewInterceptor', function(ROUTES, $injector, $rootScope, $timeout){
		var templates = Object.keys(ROUTES).map(function(key){
			return ROUTES[key].templateUrl;
		});

		$rootScope.http = {
			progress: 0,
			count: 0,
			loading: false
		};

		var timeout;
		$rootScope.$watch('http.loading', function(value){
			if(value){
				timeout = $timeout(function(){
					$rootScope.http.progress = 100;
				}, 100);
			} else {
				$timeout.cancel(timeout);
				$rootScope.http.progress = 0;
			}
		});

		return {
			request: function(config) {
				$rootScope.http.count++;
				$rootScope.http.loading = true;
				// routeParams is not set yet, we must get the current route instead
				var $route = $injector.get('$route');
				if(templates.indexOf(config.url) !== -1){
					config.url += '?' + Object.keys($route.current.params).map(function(key){
						return encodeURIComponent(key) + '=' + encodeURIComponent($route.current.params[key]);
					}).join('&');
				}
				return config;
			},
			response: function(response){
				$rootScope.http.count--;
				if(!$rootScope.http.count){
					$rootScope.http.loading = false;
				}
				return response;
			}
		};
	});