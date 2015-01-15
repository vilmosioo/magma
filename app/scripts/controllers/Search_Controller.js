'use strict';

angular.module('Magma')
	.controller('Search_Controller', function($scope, $routeParams){

		$scope.models = {
			q: $routeParams.q || ''
		};

		$scope.handlers = {
			search: function(){
				if($scope.SearchForm.$valid){
					console.log($scope.models.q);
				}
			}
		};
	});