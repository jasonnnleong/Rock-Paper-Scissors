const prompt = require("prompt-sync")();

let getCPUChoice = () => {
    let choice = ["rock", "paper", "scissors"];
    return cpuChoice = choice[Math.floor(Math.random() * choice.length)]
}

let getPlayerChoice = () => {
    let playerChoice = prompt("Enter your choice: ", " ").toLowerCase(); 
    return playerChoice;
}

let determineWinner = (player, cpu) => {
    return winningChoice[player] == cpu ? "Player Wins!" : "CPU Wins!";
}

winningChoice = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

let player = 'rock';
let cpu = getCPUChoice();

console.log(`Player has played ${player} against CPU's ${cpu}`)
console.log(determineWinner(player, cpu))

