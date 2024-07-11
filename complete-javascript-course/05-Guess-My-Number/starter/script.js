'use strict';

const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');

// utility function
const generateRandomNumber = () => {
  return Math.ceil(Math.random() * 20); // between 1 to 20
};

const displayMessage = (message) => {
  messageElement.textContent = message;
};

const displayScore = (score) => {
  scoreElement.textContent = score;
};

const displayHighScore = (highScore) => {
  highScoreElement.textContent = highScore;
};

// variables
let secretNumber = generateRandomNumber();
let score = 20;
let highScore = 0;
console.log({ secretNumber });
// numberElement.textContent = secretNumber;

// Add Event Listener to check button
checkButton.addEventListener('click', (e) => {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberElement.textContent = secretNumber;
    numberElement.style.width = '30rem';
    document.body.style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }

    // when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      const message = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(message);
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
      disableCheckButton();
    }
  }
});

function disableCheckButton() {
  checkButton.disabled = true;
  checkButton.style.cursor = 'not-allowed';
}

// Add Event Listener to again button
againButton.addEventListener('click', () => {
  secretNumber = generateRandomNumber();
  console.log({ secretNumber });
  score = 20;
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  numberElement.textContent = '?';
  numberElement.style.width = '15rem';
  document.body.style.backgroundColor = '#222';
  checkButton.disabled = false;
  checkButton.style.cursor = 'pointer';
});
