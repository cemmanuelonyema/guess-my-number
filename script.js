'use strict';

const body = document.querySelector('.body');
const again = document.querySelector('.again');
const number = document.querySelector('.number');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');

let score = document.querySelector('.score');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let numScore = 20;
let numHighScore = 0;



///// FUNCTIONS

const displayInfo = function (element, info) {
	element.textContent = info;	
}

const gameReset = function () {
	numScore = 20;
 	secretNumber = Math.trunc(Math.random() * 20) + 1;
	//score.textContent = numScore;
	displayInfo(score, numScore )
	let guess = document.querySelector('.guess').value = '';
	displayInfo(number, '?');
	displayInfo(message, 'Start guessing...');
	body.style.background = '#222';
	number.style.width = '15rem';
}



///////Game functionality
check.addEventListener('click', function () {
	let guess = Number(document.querySelector('.guess').value);

	if (!guess) {
		// if guess is 0 = falsey value, ! convert to truthy for the condition to run or if guess === 0 can still run the condition
		displayInfo(message, 'No number');

	} else if (guess === secretNumber) {
		displayInfo(message, 'Correct Number!!!!');
	//	number.textContent = secretNumber;
		displayInfo(number,  secretNumber)

		body.style.backgroundColor = '#60b347';
		number.style.width = '30rem';

		if (numScore > numHighScore) {
			numHighScore = numScore;
		//	highScore.textContent = numHighScore;
			displayInfo(highScore, numScore)
		}

	}else if (guess !== secretNumber) {
		if (numScore > 1) {
			displayInfo(message, guess > secretNumber ?  'too high' : 'too low');

			numScore--;
		//	score.textContent = numScore;
			displayInfo(score, numScore)

		} else {
			displayInfo(message, 'You lost the game');
		//	score.textContent = 0;
			displayInfo(score, 0)

		}
	}
})

again.addEventListener('click', gameReset)
	
