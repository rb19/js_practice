'use strict';

function coinFlip() {
	//return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
	return Math.random() > 0.5 ? 'heads' : 'tails';
}

//Export for Mocha tests.
module.exports = { 
	coinflip : coinFlip
};