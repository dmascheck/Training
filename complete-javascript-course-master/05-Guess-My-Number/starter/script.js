'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;  //shows the random number due to .textContent
let score = 20;
let highScore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔️ No Number';
    displayMessage('⛔️ No Number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; //must be a string not a number needs
    document.querySelector('.number').style.width = '30rem'; //must be a string not a number needs

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📈');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game! 😭');
      document.querySelector('.score').textContent = 0;
    }
  }
  //When guess is too high before refactoring
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high!📈';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game! 😭';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //When guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low!📈';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game! 😭';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  // });
  ///////////////////////////////////////
  // Coding Challenge #1

  /* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

  // document.querySelector('.again').addEventListener('click', function () {
  //   window.location.reload();
  // }); //this was the way I did it  this won't work with the saving of highscores

  //Way the instructor did it
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    let secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
