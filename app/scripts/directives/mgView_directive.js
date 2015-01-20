'use strict';

angular.module('Magma')
	.directive('mgView', function($rootScope, $compile){
		return {
			restrict: 'A',
			replace: false,
			scope: true,
			priority: 1000, // We set our custom directive's priority to a high number to ensure that it will be compiled first and with terminal: true, the other directives will be skipped after this directive is compiled.
			link: function(scope, el){
				var enabled;
				var unbind = scope.$on('$routeChangeStart', function(ev, currRoute){
					if(enabled){
						console.log('view enabled');
						el.removeAttr('mg-view');
						el.attr('ng-view', '');
						unbind();
						$compile(el)(scope);	
					}
					enabled = true;
				});
			}
		};
	});