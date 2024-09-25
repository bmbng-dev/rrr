const choices = ['rock', 'paper', 'scissors'];
const resultMessage = document.getElementById('resultMessage');
const restartButton = document.getElementById('restartButton');

let playerChoice;
let computerChoice;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return 'It\'s a tie!';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

function playGame(playerSelection) {
  playerChoice = playerSelection;
  computerChoice = getComputerChoice();

  const result = determineWinner(playerChoice, computerChoice);
  resultMessage.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
  restartButton.style.display = 'block';
}

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

restartButton.addEventListener('click', () => {
  resultMessage.textContent = 'Let\'s Play!';
  restartButton.style.display = 'none';
});