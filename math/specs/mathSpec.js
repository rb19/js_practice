'use strict';
var assert = require('assert');
var math = require('../index');

describe('Calculator Tests', function() {
	it('should return 1+1=2', function(done) {
		assert.equal(math.add(1, 1), 2);
		done();
	});
	it('should return 5-3=2', function(done) {
		assert.equal(math.sub(5, 3), 2);
		done();
	});
	it('should return 2*2=4', function(done) {
		assert.equal(math.mul(2, 2), 4);
		done();
	});
	it('should return 9/3=3', function(done) {
		assert.equal(math.div(9, 3), 3);
		done();
	});
	it('should return 8%3=2', function(done) {
		assert.equal(math.mod(8, 3), 2);
		done();
	});
	it('should return PI', function(done) {
		assert.equal(math.pi(), Math.PI);
		done();
	});
	it('should return 1+2+1=4', function(done) {
		assert.equal(math.addAssign(1, 2), 4);
		done();
	});
	it('should return 1-(1+2)=-2', function(done) {
		assert.equal(math.subAssign(1, 2), -2);
		done();
	});
	it('should return 1*(1+2)=3', function(done) {
		assert.equal(math.multAssign(1, 2), 3);
		done();
	});
	it('should return 2/(2+3)=0.4', function(done) {
		assert.equal(math.divAssign(2, 3), 0.4);
		done();
	});
});