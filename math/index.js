'use strict';

//Arithmetic Operators
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

function inc(i){
	//return +i++;
	return i = +i + +1;
}

function dec(i){
	//return i--;
	return i = i - 1;
}

//Operator Precedence Value
function exp(i){
	return i**i;
}

//Assignmemnt Operators
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

//Math objects
function pi(){
	return Math.PI;
}

function round(i){
	return Math.round(i);
}

function power(i, j){
	return Math.pow(i, j);
}

function sqrt(i){
	return Math.sqrt(i);
}

function abs(i){
	return Math.abs(i);
}

function ceil(i){
	return Math.ceil(i);
}

function floor(i){
	return Math.floor(i);
}

function sin(i){
	return Math.sin(i * Math.PI / 180);
}

function cos(i){
	return Math.cos(i * Math.PI / 180);
}

function random(){
	return Math.random();
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
	exp: exp,
	round: round,
	power: power,
	sqrt: sqrt,
	abs: abs,
	ceil: ceil,
	floor: floor,
	sin: sin,
	cos: cos,
	random: random
}