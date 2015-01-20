'use strict';

angular.module('Magma')
	.directive('books', function(){
		return {
			restrict: 'A',
			scope: true,
			link: function(scope){
				scope.$watchCollection('books', function(value){
					console.log(value);
				});
			}
		};
	});