'use strict';

angular.module('Magma')
	.controller('Search_controller', function($scope, $routeParams){
		$scope.search = {
			term: $routeParams.q || ''
		};

		$scope.templates = {
			books: '/views/templates/books.html?q=' + $scope.search.term
		};
	});