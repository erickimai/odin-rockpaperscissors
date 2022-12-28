let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const play = document.getElementById('play');
const p = document.createElement('p');
const pagecontainer = document.getElementsByClassName('page-container');
const rules =  document.getElementById('rules');

/*buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice());
  });
});*/

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

play.addEventListener('click', function onClick(e) {
  document.body.style.background = 'none';
  document.body.style.backgroundColor = 'black';
  play.remove();
  showRules();
});

function showRules() {
  rules.style.cssText = 'color: white; display: inline-block; font-family: "Roboto Mono", monospace';
  divRules= document.createElement('div');
  divRules.innerText = 'RULES';
  divRules.style.cssText = 'animation: reveal 0.5s; text-decoration: underline';
  rules.appendChild(divRules);
  ul = document.createElement('ul');
  ul.style.cssText = "text-align: start";
  rules.appendChild(ul);
  li1 = document.createElement('li');
  li1.innerText = "Rock beats Scissors"
  li1.style.cssText = 'animation: reveal 0.6s';
  li2 = document.createElement('li');
  li2.innerText = "Paper beats Rock"
  li2.style.cssText = 'animation: reveal 0.7s';
  li3 = document.createElement('li');
  li3.innerText = "Scissors beats Paper"
  li3.style.cssText = 'animation: reveal 0.8s';
  li4 = document.createElement('li');
  li4.innerText = "First to 5 points wins"
  li4.style.cssText = 'animation: reveal 0.9s; text-decoration: underline';
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
}
