'use strict';

angular.module('Magma')
	.directive('mgView', function(){
		return {
			template: '<div ng-switch="flags.routing"><div ng-switch-when="false" ng-transclude></div><div ng-switch-default><div ng-view></div></div></div>',
			scope: {},
			transclude: true,
			controller: function($scope){
				$scope.flags = {
					routing: false
				};

				$scope.$on('$destroy', $scope.$on('$locationChangeStart', function(ev, newState, oldState){
					if(newState.charAt(newState.length - 1) === '/'){
						newState = newState.slice(0, newState.length - 1);
					}

					if(oldState.charAt(oldState.length - 1) === '/'){
						oldState = oldState.slice(0, oldState.length - 1);
					}

					if(newState !== oldState){
						$scope.flags.routing = true;
					}
				}));
			}
		}
	});