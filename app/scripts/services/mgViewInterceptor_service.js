'use strict';

angular.module('Magma')
	.factory('mgViewInterceptor', function(){
		return {
			'request': function(config) {
				// do something on success
				console.log(config);
				return config;
			}
		};
	});