//Function to generate a random computer choice and print the result
/*Choice:
Rock = 0
Paper = 1
Scissors = 2
*/

//Initalizing human and computer score
let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let score = document.querySelector(".score");
score.textContent = "Enjoy the game";

//computer choice function
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); //generates random number between 0,1,2
    if (choice === 0) { 
        return "rock"; 
    }
    else if (choice === 1) {
        return "paper"; 
    }
    else {
        return "scissors"; 
    }
}

//function logic to play one round of the game
function playRound(humanChoice, computerChoice) {
//modified version

if (computerScore == 5) {
    score.textContent = `Computer Score: ${computerScore} Human Score: ${humanScore}  COMPUTER WINS`;
}

else if (humanScore == 5) {
    score.textContent = `Computer Score: ${computerScore} Human Score: ${humanScore}  YOU WIN`;
}

else {

    if (humanChoice === "rock" && computerChoice == "paper") {
        console.log("Computer Wins");
        computerScore++;
      
    }

    else if (humanChoice === "rock" && computerChoice == "scissors") {
        console.log("YOU WIN");
        humanScore++;
  
    }

    else if (humanChoice === "paper" && computerChoice == "rock") {
        console.log("YOU WIN");
        humanScore++;
       
    }
    else if (humanChoice === "paper" && computerChoice == "scissors") {
        console.log("COMPUTER WINS");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice == "rock") {
        console.log("COMPUTER WINS");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice == "paper") {
        console.log("YOU WIN");
        humanScore++;
    }
    else if (humanChoice == computerChoice){
        console.log("IT'S A TIEEE");
    }
    else {
        console.log("INVALID PICK");
    }

    score.textContent = `Computer Score: ${computerScore} Human Score: ${humanScore}`;
}
};


function playGame() {

rock.addEventListener("click", () => {
 playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
 playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
 playRound("scissors", getComputerChoice());
});

}


addEventListener("DOMContentLoaded", playGame ());