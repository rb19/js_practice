'use strict';
var assert = require('assert');
var math = require('../index');

describe('Arithmetic Operators', function() {
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
	it('should return 2', function(done) {
		assert.equal(math.inc(1), 2);
		done();
	});
	it('should return 0', function(done) {
		assert.equal(math.dec(1), 0);
		done();
	});
});

describe('Operator Predecence Values', function(){
	it('should return 9', function(done){
		assert.equal(math.exp(3), 27);
		done();
	});
});

describe('Assignment Operators', function() {
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

describe('Math Objects', function(){
	it('should return PI', function(done) {
		assert.equal(math.pi(), Math.PI);
		done();
	});
	it('should return 4', function(done) {
		assert.equal(math.round(4.4), 4);
		done();
	});
	it('should return 5', function(done) {
		assert.equal(math.round(4.7), 5);
		done();
	});
	it('should return 144', function(done) {
		assert.equal(math.power(12, 2), 144);
		done();
	});
	it('should return 13', function(done) {
		assert.equal(math.sqrt(169), 13);
		done();
	});
	it('should return 10', function(done) {
		assert.equal(math.abs(-10), 10);
		done();
	});
	it('should return 4', function(done) {
		assert.equal(math.ceil(Math.PI), 4);
		done();
	});
	it('should return 3', function(done) {
		assert.equal(math.floor(Math.PI), 3);
		done();
	});
	it('should return 1', function(done) {
		assert.equal(math.sin(90), 1);
		done();
	});
	it('should return 1', function(done) {
		assert.equal(math.cos(0), 1);
		done();
	});
	it('should return a random number', function(done) {
		var Rand1 = math.random();
		var Rand2 = math.random();
		assert.notEqual(Rand1, Rand2);
		done();
	});
});