'use strict';

angular.module('Magma')
	.directive('mgInclude', function($rootScope, $compile){
		return {
			restrict: 'A',
			replace: false,
			terminal: true,
			priority: 1000, // We set our custom directive's priority to a high number to ensure that it will be compiled first and with terminal: true, the other directives will be skipped after this directive is compiled.
			link: function(scope, el, attr){
				scope.$on('$destroy', function(){
					console.log('destroy');
					unbind();
				});

				var unbind = $rootScope.$watch('global.routing', function(value){
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