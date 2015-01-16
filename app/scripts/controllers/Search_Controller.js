'use strict';

angular.module('Magma')
	.controller('Search_Controller', function($scope, $location, $routeParams){
		console.log('Search_Controller');

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