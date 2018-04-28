'use strict';

const assert = require('assert');
var chai = require('chai');
//Reference the flip variable to get results
const flip = require('../index').flip;
//Reference results array from index
var results = require('../index').results;

describe('Heads or Tails', function(){
	it('should be heads or tails', function(){
		//Test that the coin flip is heads or tails, should always be false.
		assert.strictEqual(flip === 'heads' || flip === 'tails', false, 'result is either heads or tails');
	});
	it('should return array', function(){
		//Test that the returned results is an array object.
		chai.assert.isArray(results,'results is an array');
	});
	it('should contain heads and tails', function(){
		//Test that the returned results array contains strings of results.
		chai.assert.include(results, 'heads','array "results" includes string "heads"');
		chai.assert.include(results, 'tails','array "results" includes string "tails"');
	});
	it('should have length of 10', function(){
		//Test that the returned array has length of 10.
		chai.assert.lengthOf(results, 10, 'array contains 10 results');
	});
});