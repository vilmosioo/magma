'use strict';

module.exports = {
	options: {
		files: ['package.json', 'bower.json'],
		updateConfigs: ['pck'],
		commit: true,
		commitMessage: 'Release v%VERSION% [skip ci]',
		commitFiles: ['package.json', 'bower.json', 'magma.min.js'],
		createTag: true,
		tagName: 'v%VERSION%',
		tagMessage: 'Version %VERSION%',
		push: true,
		pushTo: 'origin',
		gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
		globalReplace: false
	}
};