'use strict';

const flip = require('./index').coinflip;
const readline = require('readline');

function startCoin(){
	console.log('Welcome to the coin flipping simulator!' + '\n');
	flipper();
}

function flipper(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	var i;
	var j;
	var heads = 0;
	var tails = 0;
	var results  = new Array();

	rl.question('How many times would you like to flip the coin?' + '\n', (answer) => {
		if (isNaN(answer)){
			throw new Error("Entered value is not a number!");
		}
		else{
			var j = answer;
			for (i = 0; i < j; i++){
				const flop = flip();
				if (flop == 'heads'){
					results.push(flop);
					heads++;
				}
				if (flop == 'tails'){
					results.push(flop);
					tails++;
				}
			}
			const heads_per = Math.round(heads / j * 100);
			const tails_per = Math.round(tails / j * 100);
			console.log('Here are your results:', results);
			console.log('Number of heads:', heads + '\n' + 'Number of tails:', tails);
			console.log('Heads %:', heads_per + '%' + '\n' + 'Tails %:', tails_per + '%');
			rl.close();
		}
	});

}

startCoin();