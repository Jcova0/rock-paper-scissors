let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
   let start = prompt("Rock, paper, or scissors").toLowerCase();
   return start;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie round! ${humanChoice} does not beat ${computerChoice}`);
        return;
    }

    if ((humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors")) 
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    let i = 0;
    while(i < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        i++;
    }

    if (humanScore === computerScore) {
        console.log('There was no winner, tie game!');
    }
    if (humanScore > computerScore) {
        console.log(`You win!`)
    }
    else {
        console.log(`You lose!`)
    }
}

playGame();



