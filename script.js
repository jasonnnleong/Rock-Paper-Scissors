const CHOICES = ["rock", "paper", "scissors"];
const WINNING_CHOICES = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

let playerScore = 0;
let computerScore = 0;

const actionLog = document.querySelector(".actionLog");
const playerChoiceBtns = document.querySelector(".playerChoice");
const playerScoreboard = document.getElementById("playerScoreboard");
const computerScoreboard = document.getElementById("computerScoreboard");

const getCPUChoice = () => {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

const getPlayerChoice = () => {
    return prompt("Enter your choice: ", " ").toLowerCase(); 
}

const resetLog = () => {
    if (actionLog.lastChild) {
        actionLog.removeChild(actionLog.lastChild);
    }
}

const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreboard.textContent = `Player: ${playerScore}`;
    computerScoreboard.textContent = `CPU: ${computerScore}`;
    resetLog();
}

const updateScore = (winner) => {
    if (winner === "player") {
        playerScore++;
        if (playerScore === 5){
            playerScoreboard.textContent = `Player: ${playerScore} (WINNER)`;
        } else {
            playerScoreboard.textContent = `Player: ${playerScore}`;
        }
    } else if (winner === "computer") {
        computerScore++;
        if (computerScore === 5) {
            computerScoreboard.textContent = `CPU: ${computerScore} (WINNER)`;
        } else {
            computerScoreboard.textContent = `CPU: ${computerScore}`;
        }
    } else {
        console.log("TIE!");
    }
}

const playGame = (playerSelection, computerSelection) => {
    resetLog();
    const displayChoice = document.createElement('p');
    displayChoice.textContent = `Player: ${playerSelection} vs ${computerSelection} :CPU`;
    actionLog.appendChild(displayChoice);

    console.log("Player plays: " + playerSelection);
    console.log("CPU plays: " + computerSelection);

    if (playerSelection === computerSelection) {
        return "tie";
    }
    return WINNING_CHOICES[playerSelection] == computerSelection ? "player" : "computer";
}

playerChoiceBtns.addEventListener("click", (e) => {
    // Prevent new moves if the game is already over
    if (playerScore >= 5 || computerScore >= 5) {
        window.alert("Game Over!");
        resetGame();
        return;
    }

    const playerChoice = e.target.id;
    if(!playerChoice) return;

    const cpuChoice = getCPUChoice();
    const gameResult = playGame(playerChoice, cpuChoice);
    updateScore(gameResult);    
})
