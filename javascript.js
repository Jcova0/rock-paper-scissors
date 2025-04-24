let humanScore = 0;
let computerScore = 0;
let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let score = document.querySelector(".score");
let results = document.querySelector(".results");
score.textContent = "Player: 0 - Computer: 0";


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    if (getRandomInt(3) === 2) {
        return "rock";
    }
    else if (getRandomInt(3) === 1) {
        return "scissors";
    }
    else {
        return "paper";
    }
}

rockBtn.addEventListener("click", (event) => {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", (event) => {
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", (event) => {
    playRound("scissors", getComputerChoice());
});

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return;
    }

    if ((humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors")) 
    {
        humanScore++;
    }

    else {
        computerScore++;
    }

    score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;

    playGame();
}



function playGame() {
    if (humanScore === computerScore) {
        score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
    }
    if (humanScore === 5) {
        results.textContent = "You won!";
    }
    else if (computerScore === 5) {
        results.textContent = "You lost!";
    }
}



