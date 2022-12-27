let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const bod = document.querySelector('body');
const div = document.createElement('div');
div.textContent = `Player score : ${playerScore} Computer score : ${computerScore}`;
bod.appendChild(div);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice());
  });
});

function getComputerChoice(){
  switch(Math.floor(Math.random() * 3)){
    case 0:
        return 'Rock';
    case 1:
        return 'Paper';
    case 2:
        return 'Scissors';
  }
}

function game(){
  for (let i = 1; i <= 5; i++){
   	playRound(prompt('Rock, Paper or Scissors?') ,getComputerChoice());
      console.log(`Round ${i}\nYour score: ${playerScore}\nComputer score: ${computerScore}`);
  }
  if (playerScore > computerScore){
    console.log('You won the game! Congratulations!');
  } else if (playerScore < computerScore){
    console.log('You lost the game! Better luck next time!');
  } else {
    console.log('It`s a draw! Let`s play again!');
  }
  return;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert('Draw');
  } else if (playerSelection === 'Rock') {
      if (computerSelection === 'Scissors') {
        alert('You won! Rock beats Scissors.');
        playerScore++;
      } else {
        alert('You lost! Paper beats Rock.');
        computerScore++;
      }
  } else if (playerSelection === 'Paper') {
      if (computerSelection === 'Rock') {
        alert('You won! Paper beats Rock.');
        playerScore++;
      } else {
        alert('You lost! Scissors beats Paper.');
        computerScore++;
      }
  } else if (playerSelection === 'Scissors') {
      if (computerSelection === 'Paper') {
        alert('You won! Scissors beats Paper.');
        playerScore++;
      } else {
        alert('You lost! Rock beats Scissors');
        computerScore++;
      }
  }
  div.textContent = `Player score : ${playerScore} Computer score : ${computerScore}`;
  if (playerScore === 5) {
    div.textContent = `You won the game!`;
  } else if (computerScore === 5) {
    div.textContent = `You lost the game!`;
  }
}




