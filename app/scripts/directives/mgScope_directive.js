'use strict';

angular.module('Magma')
	.directive('mgScope', function(){
		return {
			restrict: 'A',
			link: function(scope, el, attr){
				try{
					angular.extend(scope, JSON.parse(attr.mgScope));
				}catch(err){
					console.error('mgScope requires valid JSON to parse');
				}
			}
		};
	});