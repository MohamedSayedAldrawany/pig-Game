'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const boxSize = function (size) {
  document.querySelector('.number').style.width = size;
};

document.querySelector('.check').addEventListener('click', function () {
  console.log('hello');
  const guess = Number(document.querySelector('.guess').value);
  //when the input is empty
  if (!guess) {
    displayMessage('no number');
  }
  //when the guess number is corrct
  else if (guess == secretNumber) {
    displayMessage('😍Correct number ');
    boxSize('30rem');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  }
  // in case the number is wrong
  else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'too high' : 'too low ');
      score--;
      document.querySelector('.score').textContent = score;
    } else displayMessage('you lost the game ');
  }
});
//restore the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  boxSize('15rem');
  document.querySelector('.number').textContent = '?';
});
