let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    //Rules 
    // Rock > Scissors      Scissors > Paper        Paper > Rock
    const results = document.querySelector("#results");

    // Determine winner
    let wonRound = false;

    // Handle draw
    if (humanChoice == computerChoice) {
        
        results.textContent = "Draw!";
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
        results.textContent = msg;
        humanScore++;
        //console.log(humanScore);
    }
    else {
        msg = `You lose! ${computerChoice} beats ${humanChoice}`;
        results.textContent = msg;
        computerScore++;
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

function initGame() {
    const score = document.querySelector(".score");
    const round = document.querySelector("#round");

    score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;
    round.textContent = `Round: 0`;

}

function endGame() {
    const results = document.querySelector("#results");

    if (humanScore > computerScore)
        alert("YOU WON!!!!....GAME OVER😀");
        //results.textContent = "YOU WON!!!!....GAME OVER😀";
    else
        alert("YOU LOSE!.....GAME OVER😢");
        //results.textContent = "YOU LOSE!.....GAME OVER😢";
        
}

function playGame() {
    //Initialize buttons
    const score = document.querySelector(".score");
    const menu = document.querySelector("#menu");
    const round = document.querySelector("#round");
    let timesClicked = 0; 

    initGame();
    menu.addEventListener("click", (event) => {
            
        // Play round
        let target = event.target;

        const userChoice = target.id;
        const computerChoice = getComputerChoice();

        playRound(userChoice, computerChoice);

        timesClicked++;

        score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;
        round.textContent = `Round: ${timesClicked}`;

        // End game after 5 rounds
        if (humanScore == 5 || computerScore == 5)
            {
                endGame();
                return;
            }
    });

    
}

//USE BUBBLING 

playGame();



