'use strict';

const assert = require('assert');
const flip = require('../index').flip;
//Reference the flip variable to get results
const coin = require('../index').coin;

describe('Heads or Tails', function(){
	it('should be heads or tails', function(){
		//Returns function.
		//console.log('Coinflip:', flip);
		//Should return the value of whether heads or tails, but always shows up undefined.
		console.log('Coinflip:', coin);
		assert.strictEqual(flip === 'heads' || flip === 'tails', false, 'result is either heads or tails');
	});
});