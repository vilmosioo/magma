'use strict';

describe('mgView spec', function(){
	var $compile,
		original = 'original content',
		$animate,
		$rootScope;

	beforeEach(module('Magma'));
	beforeEach(inject(function(_$compile_, _$rootScope_, _$animate_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		$animate = _$animate_;
	}));

	it('should keep content if value is falsy', function(){
		var $element = $compile('<div mg-view>'+original+'</div>')($rootScope);
		$rootScope.$digest();

		expect($element.text()).toEqual(original);
		expect($element[0].hasAttribute('mg-view')).toBe(true);
	});

	it('should replace itself with ngView on routeChangeSuccess', function(){
		var $element = $compile('<div mg-view>'+original+'</div>')($rootScope);

		expect($element.next().length).toBe(0);
		spyOn($animate, 'leave');
		$rootScope.$broadcast('$routeChangeSuccess'); // should ignore first event
		$rootScope.$broadcast('$routeChangeSuccess');

		expect($animate.leave).toHaveBeenCalledWith($element);
		expect($element.next()[0].hasAttribute('ng-view')).toBe(true);
	});
});