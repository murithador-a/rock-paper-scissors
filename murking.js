console.log("Welcome to Rock Paper Scissors!");

function getComputerChoice(){
  let randomNumber = Math.random();

  if(randomNumber < 1 / 3){
    return "rock";
  }
  else if(randomNumber < 2 / 3){
    return "paper";
  }
  else{
    return "scissors";
  }
}

function getHumanChoice(){
  let choice = prompt("Rock, Paper, or Scissors?");
  return choice;
}


function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();

  if(humanChoice === computerChoice){
    console.log("It's a tie!");
  }
  else if (humanChoice === "rock" && computerChoice === "scissors"){
    humanScore++;
    console.log("Human wins! Rock beats scissors.");
  }
  else if (humanChoice === "paper" && computerChoice === "rock"){
    humanScore++;
    console.log("Human wins! Paper beats rock.");
  }
  else if (humanChoice === "scissors" && computerChoice === "paper"){
    humanScore++;
    console.log("Human wins! Scissors beats paper.");
  }
  else{
    computerScore++;
    console.log("Computer wins!");
  }
}

for(let i = 1; i <= 5; i++){
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}

console.log(`Game over ! Final Scores:`);
console.log(`Human Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);

if(humanScore > computerScore){
  console.log("Human wins the game!");
}
else if(humanScore < computerScore){
  console.log("Computer wins the game!");
}
else{
  console.log("It's a tie game!");

}
}

playGame();
