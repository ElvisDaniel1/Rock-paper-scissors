const humanScore = 0;
const computerScore = humanScore;

function getComputerChoice() {
    //Generate num between 0 and 2 incl
    let num = Math.floor(Math.random() * 3);

    //Choices
    let choices = ["rock", "paper", "scissors"];

    return console.log(choices[num]);
}

function getHumanChoice() {
    let userChoice = prompt("Rock, Paper, Scissors....SHOOT");
    
    return console.log(userChoice.toLowerCase());
}