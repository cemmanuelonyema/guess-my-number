'use strict';

const body = document.querySelector('.body');
const again = document.querySelector('.again');
const number = document.querySelector('.number');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let numScore = 20;
let score = document.querySelector('.score');
let numHighScore = 0;


check.addEventListener('click', function () {
	let guess = Number(document.querySelector('.guess').value);

	if (!guess) {
		// if guess is 0 = falsey value, ! convert to truthy for the condition to run or if guess === 0 can still run the condition
		message.textContent = 'No Number!';

	} else if (guess === secretNumber) {
		message.textContent = 'Correct Number!!!';
		number.textContent = secretNumber;
		body.style.backgroundColor = '#60b347';
		number.style.width = '30rem';

		if (numScore > numHighScore) {
			numHighScore = numScore;
			highScore.textContent = numHighScore;
		}

	} else if (guess > secretNumber) {
		if (numScore > 1) {
			message.textContent = 'too high';
			numScore--;
			score.textContent = numScore;
		} else {
			message.textContent = 'You lost the game';
			score.textContent = 0;
		}
	} else if (guess < secretNumber) {
		if (numScore > 1) {
			message.textContent = 'too low';
			numScore--;
			score.textContent = numScore;
		} else {
			message.textContent = 'You lost the game';
			score.textContent = 0;
		}
	}
})


again.addEventListener('click', function () {
	numScore = 20;
	message.textContent = 'Start guessing...'
	score.textContent = numScore;
	body.style.background = '#222';
	number.textContent = '?';
	document.querySelector('.guess').value = '';
	number.style.width = '15rem';
	secretNumber = Math.trunc(Math.random() * 20) + 1;
})