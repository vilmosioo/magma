'use strict';

describe('mgBind spec', function(){
	var $compile, $rootScope, values = {
		original: 'Original content',
		dynamic: 'Dynamic content'
	};

	beforeEach(module('Magma'));
	beforeEach(inject(function(_$compile_, _$rootScope_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	it('should keep content if value is falsy', function(){
		var $element = $compile('<div mg-bind>'+values.original+'</div>')($rootScope);
		$rootScope.$digest();

		expect($element.text()).toEqual(values.original);
		expect($element[0].hasAttribute('mg-bind')).toBe(true);
	});

	it('should replace itself with ngBind if value is truthy', function(){
		var scope = $rootScope.$new(), $element;
		scope.defined = values.dynamic;

		$element = $compile('<div mg-bind="defined">'+values.original+'</div>')(scope);
		$rootScope.$digest();

		expect($element.text()).toEqual(values.dynamic);
		expect($element[0].hasAttribute('mg-bind')).toBe(false);

		$element = $compile('<div mg-bind="\''+values.dynamic+'\'">'+values.original+'</div>')(scope);
		$rootScope.$digest();

		expect($element.text()).toEqual(values.dynamic);
		expect($element.attr('ng-bind')).toBe('\'' + values.dynamic + '\'');
		expect($element[0].hasAttribute('mg-bind')).toBe(false);
	});
});