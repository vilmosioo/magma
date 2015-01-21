'use strict';

angular.module('Magma')
	.directive('mgView', function($animate, $rootScope, $compile){
		return {
			restrict: 'A',
			replace: false,
			priority: 1000, // We set our custom directive's priority to a high number to ensure that it will be compiled first and with terminal: true, the other directives will be skipped after this directive is compiled.
			link: function(scope, el){
				var enabled;
				var unbind = scope.$on('$routeChangeSuccess', function(){
					if(enabled){
						var view = el.clone().empty();
						view.removeAttr('mg-view');
						view.attr('ng-view', '');
						el.after(view);
						$animate.leave(el);
						$compile(view)(scope);
						unbind();
					}
					enabled = true;
				});
			}
		};
	});