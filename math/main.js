'use strict';
var math = require('./index');
const readline = require('readline');


function chooseMath(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Choose a math category: ' + '\n' + '1: Arithmetic Operators' + '\n' + '2: Operator Precedence Value' + '\n' + '3: Assignment Operators' + '\n' + '4: Math Objects' + '\n', (answer1) => {
		if (answer1 === '1'){
			rl.question('Choose an arithmetric operator! ' + '\n' + '1: Add' + '\n' + '2: Subtract' + '\n' + '3: Multiply' + '\n' + '4: Divide' + '\n' + '5: Modulus' 
				+ '\n' + '6: Increment' + '\n' + '7: Decrement' + '\n', (answer2) => {
				if (answer2 === '1'){
					computeAdd();
				}
				if (answer2 === '2'){
					computeSub();
				}
				if (answer2 === '3'){
					computeMul();
				}
				if (answer2 === '4'){
					computeDiv();
				}
				if (answer2 === '5'){
					computeMod();
				}
				if (answer2 === '6'){
					computeIncrement();
				}
				if (answer2 === '7'){
					computeDecrement();
				}
			});
		}
		if (answer1 === '2'){
			rl.question('Choose an operator precedence value! ' + '\n' + '1: Exponential' + '\n', (answer2) => {
				if (answer2 === '1'){
					computeExponential();
				}
			});
		}
		if (answer1 === '3'){
			rl.question('Choose an assignment operator! ' + '\n' + '1: Add assignment' + '\n' + '2: Subtract assignment' + '\n' + '3: Multiplicaiton assignment' + '\n' + '4: Division assignment' + '\n', (answer2) => {
				if (answer2 === '1'){
					computeAddAssign();
				}
				if (answer2 === '2'){
					computeSubAssign();
				}
				if (answer2 === '3'){
					computeMultAssign();
				}
				if (answer2 === '4'){
					computeDivAssign();
				}
			});
		}
		if (answer1 === '4'){
			rl.question('Choose a math operation! ' + '\n' + '0: Random' + '\n' + '1: Pi' + '\n' + '2: Round' + '\n' + '3: Power' + '\n' + '4: Square root' + '\n' + '5: Absolute' + '\n' 
				+ '6: Ceiling' + '\n' + '7: Floor' + '\n' + '8: Sine' + '\n' + '9: Cosine' + '\n', (answer2) => {
				if (answer2 === '0' || answer2 === 'random'){
						computeRandom();
				}
				if (answer2 === '1' || answer2 === 'pi'){
					computePi();
				}
				if (answer2 === '2' || answer2 === 'round'){
					computeRound();
				}
				if (answer2 === '3' || answer2 === 'power'){
					computePower();
				}
				if (answer2 === '4' || answer2 === 'square'){
					computeSquareRoot();
				}
				if (answer2 === '5' || answer2 === 'absolute'){
					computAbsolute();
				}
				if (answer2 === '6' || answer2 === 'ceiling'){
					computeCeiling();
				}
				if (answer2 === '7' || answer2 === 'floor'){
					computeFloor();
				}
				if (answer2 === '8' || answer2 === 'sine'){
					computeSine();
				}
				if (answer2 === '9' || answer2 === 'cosine'){
					computeCosine();
				}
			});
		}
	});
}

//Option 1
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

//Option 2
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

//Option 3
function computeAddAssign(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (addassign1) => {
		rl.question('Give me another number!', (addassign2) => {
			var Answer = math.addAssign(addassign1, addassign2);
			console.log(Answer);
			rl.close();
		});
	});	
}

function computeSubAssign(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (subassign1) => {
		rl.question('Give me another number!', (subassign2) => {
			var Answer = math.subAssign(subassign1, subassign2);
			console.log(Answer);
			rl.close();
		});
	});	
}

function computeMultAssign(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (multassign1) => {
		rl.question('Give me another number!', (multassign2) => {
			var Answer = math.multAssign(multassign1, multassign2);
			console.log(Answer);
			rl.close();
		});
	});	
}

function computeDivAssign(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (divassign1) => {
		rl.question('Give me another number!', (divassign2) => {
			var Answer = math.divAssign(divassign1, divassign2);
			console.log(Answer);
			rl.close();
		});
	});	
}

//Option 4
function computeRandom(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	var Answer = math.random();
	console.log('Here\'s a random number! ', Answer);
	rl.close();
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

function computeRound(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (round) => {
		var Answer = math.round(round);
		console.log(Answer);
		rl.close();
	});
}

function computePower(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (power1) => {
		rl.question('Give me another number! ', (powerassign2) => {
			var Answer = math.power(powerassign1, powerassign2);
			console.log(Answer);
			rl.close();
		});
	});	
}

function computeSquareRoot(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (sqrt) => {
		var Answer = math.sqrt(sqrt);
		console.log(Answer);
		rl.close();
	});
}

function computeAbsolute(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (abs) => {
		var Answer = math.abs(abs);
		console.log(Answer);
		rl.close();
	});
}

function computeCeiling(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (ceil) => {
		var Answer = math.ceil(ceil);
		console.log(Answer);
		rl.close();
	});
}

function computeFloor(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (floor) => {
		var Answer = math.floor(floor);
		console.log(Answer);
		rl.close();
	});
}

function computeSine(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (sin) => {
		var Answer = math.sin(sin);
		console.log(Answer);
		rl.close();
	});
}

function computeCosine(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.question('Give me a number! ', (cos) => {
		var Answer = math.cos(cos);
		console.log(Answer);
		rl.close();
	});
}

chooseMath();