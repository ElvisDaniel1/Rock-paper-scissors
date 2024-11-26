function playRound(humanChoice, computerChoice) {
    const results = document.querySelector(".results");
    //Rules 
    // Rock > Scissors      Scissors > Paper        Paper > Rock

    // Determine winner
    let wonRound = false;

    // Handle draw
    if (humanChoice == computerChoice) {
        
        results.textContent = "Draw!";
        //console.log("Draw!");
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
        //console.log(msg);
        results.textContent = msg;
        //humanScore++;
        //console.log(humanScore);
    }
    else {
        msg = `You lose! ${computerChoice} beats ${humanChoice}`;
        //console.log(msg);
        results.textContent = msg;
        //computerScore++;
        //console.log(computerScore);
    }
        
}


function getComputerChoice() {
    //Generate num between 0 and 2 incl
    let num = Math.floor(Math.random() * 3);

    //Choices
    let choices = ["rock", "paper", "scissors"];

    return (choices[num]);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    });
});