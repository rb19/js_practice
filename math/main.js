'use strict';
var math = require('./index');
const readline = require('readline');


function chooseMath(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('What do you want to do? ' + '\n' + '1: Add' + '\n' + '2: Subtract' + '\n' + '3: Multiply' + '\n' + '4: Divide' + '\n' + '5: Modulus' + '\n' + '6: Increment' + '\n' + '7: Decrement' + '\n' + '8: Exponential' + '\n' + '9: Pi' + '\n', (answer) => {
		if (answer === '1'){
			computeAdd();
		}
		if (answer === '2'){
			computeSub();
		}
		if (answer === '3'){
			computeMul();
		}
		if (answer === '4'){
			computeDiv();
		}
		if (answer === '5'){
			computeMod();
		}
		if (answer === '6'){
			computeIncrement();
		}
		if (answer === '7'){
			computeDecrement();
		}
		if (answer === '8'){
			computeExponential();
		}
		if (answer === '9' || answer === 'pi'){
			computePi();
		}
	});
}

function computeAdd(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (add1) => {
		rl.question('Give me another number! ', (add2) => {
			var Answer = math.add(add1, add2);
			console.log(Answer);
			rl.close();
		});
	});
}

function computeSub(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (sub1) => {
		rl.question('Give me another number! ', (sub2) => {
			var Answer = math.sub(sub1, sub2);
			console.log(Answer);
			rl.close();
		});
	});
}

function computeMul(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (mul1) => {
		rl.question('Give me another number! ', (mul2) => {
			var Answer = math.mul(mul1, mul2);
			console.log(Answer);
			rl.close();
		});
	});
}

function computeDiv(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (div1) => {
		rl.question('Give me another number! ', (div2) => {
			var Answer = math.div(div1, div2);
			console.log(Answer);
			rl.close();
		});
	});
}

function computeMod(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (mod1) => {
		rl.question('Give me another number! ', (mod2) => {
			var Answer = math.mod(mod1, mod2);
			console.log(Answer);
			rl.close();
		});
	});
}

function computeIncrement(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (inc) => {
		var Answer = math.inc(inc);
		console.log(Answer);
		rl.close();
	});
}

function computeDecrement(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (dec) => {
		var Answer = math.dec(dec);
		console.log(Answer);
		rl.close();
	});
}

function computeExponential(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (exp) => {
		var Answer = math.exp(exp);
		console.log(Answer);
		rl.close();
	});
}

function computePi(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	var Answer = math.pi();
	console.log('Pi! : ', Answer);
	rl.close();
}

chooseMath();