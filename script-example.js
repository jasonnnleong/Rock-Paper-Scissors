const CHOICES = ["rock", "paper", "scissors"];
const WINNING_CHOICES = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

let playerScore = 0;
let computerScore = 0;

// Cache DOM Lookups at the top level
const playerScoreboard = document.getElementById("playerScoreboard");
const computerScoreboard = document.getElementById("computerScoreboard");
const scoreboard = document.querySelector(".scoreboard");
const playerChoiceBtns = document.querySelector(".playerChoice");

const getCPUChoice = () => {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
};

// Left in for legacy/terminal support, though UI primarily drives this now
const getPlayerChoice = () => {
    const choice = prompt("Enter your choice: ", " ");
    return choice ? choice.toLowerCase() : "";
};

const updateScore = (winner) => {
    if (winner === "player") {
        playerScore++;
        playerScoreboard.textContent = `Player: ${playerScore}`;
    } else if (winner === "computer") {
        computerScore++;
        computerScoreboard.textContent = `CPU: ${computerScore}`;
    } else {
        console.log("TIE!");
    }
};

const playGame = (playerSelection, computerSelection) => {
    scoreboard.innerHTML = '';

    const displayChoice = document.createElement('p');
    displayChoice.textContent = `Player: ${playerSelection} vs ${computerSelection} :CPU`;
    scoreboard.appendChild(displayChoice);

    console.log(`Player plays: ${playerSelection}`);
    console.log(`CPU plays: ${computerSelection}`);

    if (playerSelection === computerSelection) {
        return "tie";
    }
    return WINNING_CHOICES[playerSelection] === computerSelection ? "player" : "computer";
};

playerChoiceBtns.addEventListener("click", (e) => {
    const playerSelection = e.target.id;
    if (!playerSelection) return; 

    const cpuChoice = getCPUChoice();
    const gameResult = playGame(playerSelection, cpuChoice);
    updateScore(gameResult);    
});
