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

function endGame() {
    const results = document.querySelector("#results");

    if (humanScore > computerScore)
        results.textContent = "YOU WON!!!!....GAME OVER😀";
    else
        results.textContent = "YOU LOSE!.....GAME OVER😢";
        
}

function playGame() {
    //Initialize buttons
    const score = document.querySelector(".score");
    const menu = document.querySelector("#menu");
    let timesClicked = 0; 


    menu.addEventListener("click", (event) => {
        // End game after 5 rounds
        if (timesClicked == 4)
        {
            endGame();
            return;
        }
            
        // Play round
        let target = event.target;

        const userChoice = target.id;
        const computerChoice = getComputerChoice();

        playRound(userChoice, computerChoice);


        timesClicked++;

        score.textContent = humanScore;
    });

    
}

//USE BUBBLING 

playGame();



