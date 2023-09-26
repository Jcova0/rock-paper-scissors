
//Randomly choose between rock, paper, or scissors
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

//Choose between rock, paper, or scissors
function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors: ");
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    }
    else {
        return "Error";
    }
}

//Decide who wins the round
function playRound(playerSelection, computerSelection) {
    let win = "You win!";
    let lose = "You lose!";
    let tie = "It's a tie!";
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return win;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return win;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return win;
    }
    else if (playerSelection === computerSelection) {
        return tie;
    }
    else {
        return lose;
    }
}

//Keep score of the game and determine who wins
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "You win!") {
            playerScore++;
        }
        else if (roundResult === "You lose!") {
            computerScore++;
        }
        else {
            tieScore++;
        }
    }

    return `Player: ${playerScore} \nComputer: ${computerScore} \nTies: ${tieScore}`;
}

console.log(game());