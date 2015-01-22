'use strict';

angular.module('MagmaDemo')
	.factory('appInterceptor', function($rootScope){

		$rootScope.$on('$locationChangeSuccess', function(ev, location){
			$rootScope.app.url = location;
		});

		return {
			response: function(res) {
				if(res.headers('x-app-title') || res.headers('x-app-description') || res.headers('x-app-image')){
					$rootScope.app.title = res.headers('x-app-title');
					$rootScope.app.description = res.headers('x-app-description');
					$rootScope.app.image = res.headers('x-app-image');
				}
				return res;
			}
		};
	});