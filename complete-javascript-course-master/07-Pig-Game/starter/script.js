'use strict';

//Selesting elements
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1'); //works same as above
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//Starting conditions
let init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generate a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3, check for rolled 1: if true switch to next players.
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice; //same as currentScore = currentScore + dice
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch players
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1]+ currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2.  check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      //Finish Game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch to next players
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
// function () {
//window.location.reload(); my way
// });
