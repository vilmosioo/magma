'use strict';

// based on ngBind source, but only kicks into effect after routing is enabled
angular.module('Magma')
	.directive('mgBind', function($compile) {
		return {
			restrict: 'AC',
			compile: function(templateElement) {
				$compile.$$addBindingClass(templateElement);
				return function link(scope, element, attr) {
					var unbind = scope.$watch('global.routing', function(value){
						if(value){
							$compile.$$addBindingInfo(element, attr.mgBind);
							element = element[0];
							scope.$watch(attr.mgBind, function(value) {
								element.textContent = value === undefined ? '' : value;
							});
							unbind();
						}
					});
				};
			}
		};
	});