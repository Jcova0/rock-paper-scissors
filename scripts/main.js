
//Get random computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else if (randomNumber === 2) {
        return "scissors";
    }   
    else {
        return "Error";
    }
}

//Get player choice
function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors: ");
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    }
    else {
        return "Error";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win!";
    }
    else if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else {
        return "You lose!";
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));