'use strict';

angular.module('Magma')
	.factory('appInterceptor', function($rootScope){
		return {
			response: function(res) {
				if(res.headers('x-app-title') || res.headers('x-app-description')){
					$rootScope.app.title = res.headers('x-app-title');
					$rootScope.app.description = res.headers('x-app-description');
					console.log($rootScope.app);
				}
				return res;
			}
		};
	});