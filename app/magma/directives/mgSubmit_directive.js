'use strict';

angular.module('Magma')
	.directive('mgSubmit', function($compile){
		return {
			restrict: 'A',
			replace: false,
			terminal: true,
			priority: 1000, // We set our custom directive's priority to a high number to ensure that it will be compiled first and with terminal: true, the other directives will be skipped after this directive is compiled.
			link: function(scope, el, attr){
				var element = el;
				do{
					if(element[0].nodeName === 'FORM'){
						element.removeAttr('action');
						element.removeAttr('method');
						break;
					}
				}while(element = element.parent());
				el.attr('ng-submit', attr.mgSubmit);
				el.removeAttr('mg-submit');
				$compile(el)(scope);
			}
		};
	});