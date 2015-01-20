'use strict';

angular.module('Magma')
	.directive('books', function(){
		return {
			restrict: 'A',
			scope: true,
			link: function(scope){
				var unbind = scope.$watchCollection('books', function(value){
					if(value){

						unbind();
					}
				});
			}
		};
	});