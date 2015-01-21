'use strict';

angular.module('Magma')
	.directive('mgSubmit', function($compile){
		return {
			restrict: 'A',
			replace: false,
			terminal: true,
			priority: 1000, // We set our custom directive's priority to a high number to ensure that it will be compiled first and with terminal: true, the other directives will be skipped after this directive is compiled.
			link: function(scope, el, attr){
				el.removeAttr('action');
				el.removeAttr('method');
				el.attr('ng-submit', attr.mgSubmit);
				el.removeAttr('mg-submit');
				$compile(el)(scope);
			}
		};
	});