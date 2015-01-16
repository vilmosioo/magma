'use strict';

angular.module('Magma')
	.controller('Header_controller', function($scope, $location, $routeParams){
		$scope.models = {
			q: $routeParams.q || ''
		};

		$scope.handlers = {
			search: function(){
				if($scope.SearchForm.$valid){
					$location.search({q: $scope.models.q}).path('/search/');
				}
			}
		};
	});