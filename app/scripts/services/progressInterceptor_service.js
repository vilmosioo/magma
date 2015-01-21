'use strict';

angular.module('Magma')
	.factory('progressInterceptor', function($rootScope, $timeout){

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
				return config;
			},
			response: function(response){
				$rootScope.http.count--;
				if(!$rootScope.http.count){
					$rootScope.http.loading = false;
				}
				return response;
			},
			responseError: function(response){
				$rootScope.http.count--;
				if(!$rootScope.http.count){
					$rootScope.http.loading = false;
				}
				return response;
			}
		};
	});