'use strict';

describe('mgScope spec', function(){
	var $compile, $rootScope, value = {
		test: 1
	};

	beforeEach(module('Magma'));
	beforeEach(inject(function(_$compile_, _$rootScope_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	it('should expand scope with JSON object', function(){
		var scope = $rootScope.$new();

		$compile('<div mg-scope=\''+JSON.stringify(value)+'\'></div>')(scope);
		$rootScope.$digest();

		expect(scope).toImplement(value);
	});

	it('should throw error if mgScope contains an invalid value', function(){
		spyOn(console, 'error');
		$compile('<div mg-scope></div>')($rootScope.$new());
		$rootScope.$digest();

		expect(console.error).toHaveBeenCalledWith('mgScope requires valid JSON to parse');
	});
});