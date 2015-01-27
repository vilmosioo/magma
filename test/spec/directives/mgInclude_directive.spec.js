'use strict';

describe('mgInclude spec', function(){
	var $compile,
		$httpBackend,
		$rootScope,
		$animate,
		$q,
		original = 'Original content',
		url = 'dynamic.html',
		response = 'Dynamic content';

	beforeEach(module('Magma'));
	beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_, _$animate_, _$q_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		$httpBackend = _$httpBackend_;
		$animate = _$animate_;
		$q = _$q_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should keep content if value is falsy', function(){
		var $element = $compile('<div mg-include>'+original+'</div>')($rootScope);
		$rootScope.$digest();

		expect($element.text()).toEqual(original);
		expect($element[0].hasAttribute('mg-include')).toBe(true);
	});

	it('should replace itself with ngInclude if value is truthy', function(){
		var scope = $rootScope.$new(), $element;
		scope.defined = url;

		$element = $compile('<div mg-include="defined">'+original+'</div>')(scope);
		expect($element.next().length).toBe(0);
		$httpBackend.expectGET(url).respond(200, response);
		spyOn($animate, 'leave');
		$httpBackend.flush();
		$rootScope.$digest();

		expect($animate.leave).toHaveBeenCalledWith($element);
		expect($element.next().text()).toEqual(response);
		expect($element.next()[0].hasAttribute('ng-include')).toBe(true);
	});
});