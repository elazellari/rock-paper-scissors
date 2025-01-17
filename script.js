//Function to generate a random computer choice and print the result
/*Choice:
Rock = 0
Paper = 1
Scissors = 2
*/

//Initalizing human and computer score
let humanScore = 0;
let computerScore = 0;

//computer choice function
function getComputerChoice() {
    let pick;
    let choice = Math.floor(Math.random() * 3); //generates random number between 0,1,2
    if (choice === 0) { 
        pick = "Rock"; 
    }
    else if (choice === 1) {
        pick = "Paper"; 
    }
    else {
        pick = "Scissors"; 
    }
    return pick.toLowerCase();
}

//human choice function
function getHumanChoice() {
   
    let choice = prompt("Pick between: Rock, Paper, Scissors"); //prompts user to choose between three picks 
    if (choice.toLowerCase() === "rock") {  
        console.log("You picked Rock");
        }
        else if (choice.toLowerCase() === "paper" ) {
            console.log("You picked Paper");
        }
        else if (choice.toLowerCase() === "scissors"){

            console.log("You picked Scissors");
        }
        else {
            pick = "Invalid Pick";
        }
        return choice.toLowerCase();
}

//function logic to play one round of the game

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("COMPUTER WINS");
        computerScore++;
      
    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("YOU WIN");
        humanScore++;
  
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("YOU WIN");
        humanScore++;
       
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("COMPUTER WINS");
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("COMPUTER WINS");
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("YOU WIN");
        humanScore++;
    }
    else if (humanChoice === computerChoice){
        console.log("IT'S A TIEEE");
    }
    else {
        console.log("INVALID PICK");
    }
 
};


function playGame() {
    
    for (i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(); 
    playRound(humanSelection, computerSelection);
    console.log(`Computer Score: ${computerScore} and Human Score ${humanScore}`);
}

if (computerScore > humanScore) {
    console.log("Computer Wins")
}

else if (computerScore < humanScore){
    console.log("Human Wins")
}

else {
    console.log("IT'S A TIE");
}

}
