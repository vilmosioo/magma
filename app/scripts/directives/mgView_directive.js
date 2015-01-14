'use strict';

angular.module('Magma')
	.directive('mgView', function(){
		return {
			template: '<div><div ng-if="!global.routing" ng-transclude></div><div ng-if="global.routing" ng-view></div></div>',
			scope: true,
			transclude: true,
			replace: true
		};
	});