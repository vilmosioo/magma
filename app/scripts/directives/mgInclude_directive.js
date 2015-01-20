'use strict';

angular.module('Magma')
	.directive('mgInclude', function($compile){
		return {
			restrict: 'A',
			link: function(scope, el, attr){
				var unbind = scope.$watch(function(){
					return scope.$eval(attr.mgInclude);
				}, function(value){
					if(value){
						el.attr('ng-include', attr.mgInclude);
						el.removeAttr('mg-include');
						$compile(el)(scope);
						unbind();
					}
				});
			}
		};
	});