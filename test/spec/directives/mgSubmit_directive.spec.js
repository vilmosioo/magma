'use strict';

describe('mgSubmit spec', function(){
	var $compile, $rootScope;

	beforeEach(module('Magma'));
	beforeEach(inject(function(_$compile_, _$rootScope_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	it('should remove action and method attributes from form elements', function(){
		var onsubmit = 'onsubmit()', $element = $compile('<form action="/" method="GET" mg-submit="onsubmit()"></form>')($rootScope);
		$rootScope.$digest();

		expect($element[0].hasAttribute('method')).toBe(false);
		expect($element[0].hasAttribute('action')).toBe(false);
		expect($element.attr('ng-submit')).toBe(onsubmit);
	});
});