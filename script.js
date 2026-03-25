// const prompt = require("prompt-sync")();
let getCPUChoice = () => {
    let choice = ["rock", "paper", "scissors"];
    return cpuChoice = choice[Math.floor(Math.random() * choice.length)]
}

let getPlayerChoice = () => {
    let playerChoice = prompt(`Player: ${playerScore} \nCPU: ${cpuScore}\nEnter your choice: `, " "); 
    return playerChoice.toLowerCase().trim();
}

let playRound = (playerChoice, cpuChoice) => {
    winningChoice = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    if (playerChoice == cpuChoice) {
        return 
    }
    return winningChoice[playerChoice] === cpuChoice ? 'playerWin' : 'cpuWin';
}

let playGame = (rounds) => {
    


    for (let i = 1; i <= rounds; i++) {
        let playerChoice = getPlayerChoice();
        let cpuChoice = getCPUChoice();
        let result = playRound(playerChoice, cpuChoice);

        console.log("-----------------------------------------------------------------------------")
        console.log(`${playerChoice}`)
        console.log(`vs`)
        console.log(`${cpuChoice}\n`)

        if (result == 'playerWin') {
            console.log(`Player wins Round ${i}!`);
            playerScore++;
        } else if (result == 'cpuWin') {
            console.log(`CPU wins Round ${i}!`);
            cpuScore++;
        } else {
            console.log("It's a draw!")
            continue;
        }
    }

    console.log(`\nPlayer: ${playerScore} & CPU: ${cpuScore}`)
    if (playerScore > cpuScore) {
        console.log("Player Wins!")
    } else if (playerScore < cpuScore) {
        console.log("CPU Wins!")
    } else {
        console.log("Draw!")
    }
}
let playerScore = 0;
let cpuScore = 0;

playGame(5);