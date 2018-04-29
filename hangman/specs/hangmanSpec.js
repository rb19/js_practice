'use strict';

const assert = require('assert');
var chai = require('chai');
var guess = require('../index').guess;

describe('Guess a letter', function(){
	it('should be null', function(){
		const value = guess();
		assert.isString(value);
	});
});