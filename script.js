'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Answer!';

// document.querySelector('.number').textContent = 7;
// document.querySelector('.score').textContent = 5;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Variables
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
const displayNumber = function(number) {
  document.querySelector('.number').textContent = number;
}
const displayScore = function(score) {
  document.querySelector('.score').textContent = score;
}

// --------------------- Game start "Check!" button ---------------------
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If input field is empty
  if (!guess) {
    displayMessage('Indtast et nummer..')

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('DU VANDT!')
    displayNumber(secretNumber);
    document.querySelector('.number').style.width = '45rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // If guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'For højt, prøv igen' : 'For lavt, prøv igen');
      score--;
      displayScore(score);

      // When player lost
    } else {
      displayMessage('Du tabte.. tryk på "Again" for nyt spil');
      displayScore(0);
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } 
});

// --------------------- "Again!" button pressed ---------------------
document.querySelector('.again').addEventListener('click', function() {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);

    displayMessage('Start guessing...');
    displayScore(score);
    displayNumber('?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
