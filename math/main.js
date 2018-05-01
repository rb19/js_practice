'use strict';
var math = require('./index');
const readline = require('readline');


function chooseMath(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('What do you want to do? ' + '\n' + '1: Add' + '\n' + '2: Subtract' + '\n' + '3: Multiply' + '\n' + '４: Divide' + '\n', (answer) => {
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

chooseMath();