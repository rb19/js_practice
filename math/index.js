'use strict';

function add(i, j){
	return +i + +j;
}

function sub(i,j){
	return i - j;
}

function mul(i, j) {
	return i * j;
};

function div(i, j){
	return i / j;
}

function mod(i, j){
	return i % j;
}

function pi(){
	return Math.PI;
}

function addAssign(i, j){
	return i += i + j;
}

function subAssign(i, j){
	return i -= i + j;
}

function multAssign(i, j){
	return i *= i + j;
}

function divAssign(i,j){
	return i /= i + j;
}

function inc(i){
	//return +i++;
	return i = +i + +1;
}

function dec(i){
	//return i--;
	return i = i - 1;
}

function exp(i){
	return i**i;
}

module.exports = {
	add: add,
	sub: sub,
	mul: mul,
	div: div,
	mod: mod,
	pi: pi,
	addAssign: addAssign,
	subAssign: subAssign,
	multAssign: multAssign,
	divAssign: divAssign,
	inc: inc,
	dec: dec,
	exp: exp
}