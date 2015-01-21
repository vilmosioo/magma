'use strict';

angular.module('Magma')
	.factory('mgViewInterceptor', function(ROUTES, $injector){
		var templates = Object.keys(ROUTES).map(function(key){
			return ROUTES[key].templateUrl;
		});

		return {
			request: function(config) {
				// routeParams is not set yet, we must get the current route instead
				var $route = $injector.get('$route');
				if(templates.indexOf(config.url) !== -1){
					config.url += '?' + Object.keys($route.current.params).map(function(key){
						return encodeURIComponent(key) + '=' + encodeURIComponent($route.current.params[key]);
					}).join('&');
				}
				return config;
			}
		};
	});