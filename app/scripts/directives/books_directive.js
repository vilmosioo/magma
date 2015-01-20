'use strict';

angular.module('Magma')
	.directive('books', function($location){
		return {
			restrict: 'A',
			scope: true,
			controller: function($scope){
				var params = $location.search(),
					current = params.page || 1;

				$scope.$watch('pagination.current', function(page){
					if(page && current !== page){
						console.log('redirect');
						$location.search(angular.extend(params, {page: page}));
					}
				});
			}
		};
	});