'use strict';

angular.module('Magma')
	.directive('mgBind', function($rootScope, $compile){
		return {
			restrict: 'A',
			replace: false,
			terminal: true,
			priority: 1000, // We set our custom directive's priority to a high number to ensure that it will be compiled first and with terminal: true, the other directives will be skipped after this directive is compiled.
			link: function(scope, el, attr){
				scope.$on('$destroy', $rootScope.$watch('global.routing', function(value){
					if(value){
						el.attr('ng-bind', attr.mgBind);
						el.removeAttr('mg-bind');
						$compile(el)(scope);
					}
				}));
			}
		};
	});