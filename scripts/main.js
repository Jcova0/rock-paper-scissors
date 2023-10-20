const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultDisplay = document.querySelector("#result");


//Variables for player and computer scores
let playerScore = 0;
let computerScore = 0;


//Randomly choose between rock, paper, or scissors
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    return choices[randomNumber];
}

//Choose between rock, paper, or scissors
rock.addEventListener("click", () => {playRound("rock", getComputerChoice())});
paper.addEventListener("click", () => {playRound("paper", getComputerChoice())});
scissors.addEventListener("click", () => {playRound("scissors", getComputerChoice())});

//Decide who wins the round
function playRound(playerSelection, computerSelection) {
    let win = "You win!";
    let lose = "You lose!";
    let tie = "It's a tie!";
    if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    }
    else if (playerSelection === computerSelection) {
        return tie;
    }
    else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
    if (playerScore === 5) {
        resultDisplay.textContent = "You win!";
        return "You win the game!";
    }
    else if (computerScore === 5) {
        resultDisplay.textContent = "You lose!";
        return "You lose the game!";
    }
};
