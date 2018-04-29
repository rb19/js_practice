'use strict';
var prompt = require('prompt');
const readline = require('readline');

var words = new Array('January', 'February', 'March', 'April', 'May', 'June', 
	'July', 'August', 'September','October', 'November', 'December');
var rand_words = words[Math.floor(Math.random() * words.length)].toLowerCase();
var wordArray = rand_words.split('');
var attempts = 7;
console.log(rand_words);
console.log(wordArray);

var answerArray = [];
for (var i = 0; i < rand_words.length; i++){
	answerArray[i] = "_";
}

//TEST ONLY: Display answer
//console.log(answerArray);
var remainingLetters = rand_words.length;
console.log('You have ' + remainingLetters + ' letters remaining!');

function guess(){
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.question('Guess a letter! ', (answer) => {
		var userInput = answer.toLowerCase();
		var count = {};
		if (userInput === null){
			return userInput;
		}
		else if (userInput.length !== 1){
			console.log('Please enter a single letter');
			guess();
		}
		else{
			if (wordArray.includes(userInput) == true){
				console.log('Correct!');
				for (var i = 0; i < wordArray.length; i++){
					var num = wordArray[i];
					count[num] = count[num] ? count[num] + 1 : 1;
				}
				for (var j=0 ; j < wordArray.length; j++){
					if (wordArray[j] == userInput){
						answerArray[j] = answerArray[j].replace('_',userInput);
					}
				}
				rl.close();
				console.log(answerArray);
				remainingLetters = remainingLetters - count[userInput];
				console.log('You have ' + remainingLetters + ' letters remaining!');
				if (remainingLetters > 0){
					guess();
				}
				else{
					console.log('Congratulations! You won!');
					process.exit();
				}
			}
			else if (wordArray.includes(userInput) == false){
				rl.close();
				if (attempts > 0){
					attempts--;
					console.log('Wrong, try again! You have ' + attempts + ' attempts left!');
					guess();
				}
				else{
					console.log('HANGMAN! Game over!');
					process.exit();
				}
			}
			else {
				console.log('ERROR!');
				process.exit(1);
			}
		}
	});
}

guess();

module.exports = {
	guess: guess
}