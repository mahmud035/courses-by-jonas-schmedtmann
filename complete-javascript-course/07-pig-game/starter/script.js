'use strict';

// Selecting elements
const newGameButton = document.querySelector('.btn--new');
const rollDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const playerSections = document.querySelectorAll('.player');
const diceImage = document.querySelector('.dice');

// playing state variable
let playing = true;

// NOTE: Get active player's (id, current--id & score--id) also inactive player's (score--id).
const getId = () => {
  const activePlayerSection = document.querySelector('.player--active');
  const activePlayerId = activePlayerSection.classList.contains('player--1')
    ? 1
    : 2;
  const currentId = `current--${activePlayerId}`;
  const scoreId = `score--${activePlayerId}`;

  const inActivePlayerId = activePlayerId === 1 ? 2 : 1;
  const inActivePlayerScoreId = `score--${inActivePlayerId}`;

  return {
    currentId,
    scoreId,
    inActivePlayerScoreId,
    activePlayerId,
  };
};

// Get current-score and (total) score
const getScore = (Id) => {
  const score = Number(document.getElementById(Id).textContent);
  return score;
};

const displayCurrentScore = (currentId, currentScore) => {
  document.getElementById(currentId).textContent = currentScore;
};

const displayTotalScore = (scoreId, score) => {
  document.getElementById(scoreId).textContent = score;
};

const switchPlayer = () => {
  playerSections.forEach((playerSection) => {
    playerSection.classList.toggle('player--active');
  });
};

const displayDiceImage = (diceNumber) => {
  diceImage.classList.remove('hidden');
  diceImage.src = `dice-${diceNumber}.png`;
};

const disableButton = (shouldDisableButton) => {
  if (shouldDisableButton) {
    rollDiceButton.disabled = true;
    holdButton.disabled = true;
    rollDiceButton.style.cursor = 'not-allowed';
    holdButton.style.cursor = 'not-allowed';
  } else {
    rollDiceButton.disabled = false;
    holdButton.disabled = false;
    rollDiceButton.style.cursor = 'pointer';
    holdButton.style.cursor = 'pointer';
  }
};

// Add Event Listener to roll dice button
rollDiceButton.addEventListener('click', () => {
  if (playing) {
    const diceNumber = Math.ceil(Math.random() * 6); // between 1 to 6
    displayDiceImage(diceNumber);

    const { currentId } = getId();
    const currentScore = getScore(currentId);

    if (diceNumber === 1) {
      displayCurrentScore(currentId, 0);
      switchPlayer();
    } else {
      const newScore = currentScore + diceNumber;
      displayCurrentScore(currentId, newScore);
    }

    console.log(`Player ${getId().currentId},`, currentScore, diceNumber);
  }
});

// Add Event Listener to hold button
holdButton.addEventListener('click', () => {
  if (playing) {
    const { currentId, scoreId, activePlayerId } = getId();
    const currentScore = getScore(currentId);
    const previousScore = getScore(scoreId);
    const newScore = currentScore + previousScore;
    displayTotalScore(scoreId, newScore);
    displayCurrentScore(currentId, 0);

    if (newScore >= 100) {
      // Finish the game
      playing = false;
      // Add new classes to winner player section
      document
        .querySelector(`.player--${activePlayerId}`)
        .classList.add('player--winner', 'name');
      // Disable roll dice and hold button
      disableButton(true);
    } else {
      switchPlayer();
    }
  }
});

// Add Event Listener to new game button
newGameButton.addEventListener('click', () => {
  // NOTE: Start the game
  playing = true;

  const { currentId, scoreId, inActivePlayerScoreId, activePlayerId } = getId();

  if (!(currentId === 'current--1')) {
    switchPlayer();
  }

  displayTotalScore(scoreId, 0); // for Active player
  displayCurrentScore(currentId, 0);
  displayTotalScore(inActivePlayerScoreId, 0);
  diceImage.classList.add('hidden');
  // Enable roll dice and hold button
  disableButton(false);
  // Remove classes from winner player section
  document
    .querySelector(`.player--${activePlayerId}`)
    .classList.remove('player--winner', 'name');
});
