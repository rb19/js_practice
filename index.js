'use strict';

var heads = 0;
var tails = 0;

console.log('Welcome to the coin flipping simulator!' + '\n' +
			'Here are your results:'
	);
function coinFlip() {
	var i;
	for (i = 0; i < 10; i++){
		var flip = (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
		console.log(flip)
		if (flip == 'heads'){
			heads++;;
		}
		if (flip == 'tails'){
			tails++;
		}
	}
	return flip;
}

coinFlip()
console.log('Number of heads:', heads + '\n' + 
			'Number of tails:', tails);

module.exports = { 
	flip: coinFlip
	//export the results of flip of heads or tails here
	//also export the count
};