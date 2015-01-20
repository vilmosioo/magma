'use strict';

angular.module('Magma')
	.directive('mgInclude', function($compile, $animate){
		return {
			restrict: 'A',
			link: function(scope, el, attr){
				var unbind = scope.$watch(function(){
					return scope.$eval(attr.mgInclude);
				}, function(value){
					if(value){
						var view = el.clone().empty();
						view.attr('ng-include', attr.mgInclude);
						view.removeAttr('mg-include');
						el.after(view);
						$animate.leave(el);
						$compile(view)(scope);
						unbind();
					}
				});
			}
		};
	});