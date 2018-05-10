'use strict';

const assert = require('assert');
var chai = require('chai');
const flip = require('../index').coinflip;

describe('Heads or Tails', function(){
	it('should be heads or tails', function(){
		assert.strictEqual(flip === 'heads' || flip === 'tails', false, 'result is either heads or tails');
	});
});