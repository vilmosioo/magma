'use strict';

angular.module('MagmaDemo')
	.directive('books', function($location){
		return {
			restrict: 'A',
			scope: true,
			controller: function($scope){
				var params = $location.search(),
					current = params.page || 1;

				$scope.templates = {};

				$scope.$watch('pagination.current', function(page){
					if(page && current !== page){
						// todo make this search agnostic
						if(page === 1){
							$location.search({q: params.q});
							$scope.templates.books = '/views/templates/books.html?q=' + params.q;	
						}	else {
							$location.search(angular.extend(params, {page: page}));
							$scope.templates.books = '/views/templates/books.html?q=' + params.q + '&page=' + page;							
						}
						
					}
				});
			}
		};
	});