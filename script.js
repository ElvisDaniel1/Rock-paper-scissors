let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    //Generate num between 0 and 2 incl
    let num = Math.floor(Math.random() * 3);

    //Choices
    let choices = ["rock", "paper", "scissors"];

    return (choices[num]);
}

function getHumanChoice() {
    let userChoice = prompt("Rock, Paper, Scissors....SHOOT");
    
    return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    //Rules 
    // Rock > Scissors      Scissors > Paper        Paper > Rock

    // Determine winner
    let wonRound = false;

    // Handle draw
    if (humanChoice == computerChoice) {
        console.log("Draw!");
        return;
    }
        
    if (humanChoice == "rock" && computerChoice == "scissors") 
        wonRound = true;
    else if (humanChoice == "scissors" && computerChoice == "paper")
        wonRound = true;
    else if (humanChoice == "paper" && computerChoice == "rock")
        wonRound = true;


    // Notify user of round status
    let msg = "";
    if (wonRound) {
        msg = `You win! ${humanChoice} beats ${computerChoice}`;
        console.log(msg);
        humanScore++;
        console.log(humanScore);
    }
    else {
        msg = `You lose! ${computerChoice} beats ${humanChoice}`;
        console.log(msg);
        computerScore++;
        console.log(computerScore);
    }
        
}

//Get values for round
const humanChoice = getHumanChoice(); 
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);