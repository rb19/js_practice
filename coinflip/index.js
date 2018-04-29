'use strict';

//Heads and tails default to 0.
var heads = 0;
var tails = 0;
//Empty array to store results
var results  = new Array();

console.log('Welcome to the coin flipping simulator!' + '\n' +
			'Here are your results:'
	);

function coinFlip() {
	var i;
	//Flip coin 10 times, count the number of heads and tails
	for (i = 0; i < 10; i++){
		var flip = (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
		if (flip == 'heads'){
			//Push result to array.
			results.push(flip);
			//Add 1 to heads count.
			heads++;
		}
		if (flip == 'tails'){
			//Push result to array.
			results.push(flip);
			//Add 1 to tails count.
			tails++;
		}
	}
	return flip;
}

coinFlip()
//TEST ONLY: Print results and count.
//console.log(results);
//console.log('Number of heads:', heads + '\n' + 'Number of tails:', tails);

//Export for Mocha use.
module.exports = { 
	//Export flip function
	flip: coinFlip,
	//Export results array
	results: results
};