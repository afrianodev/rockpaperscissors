console.log("Hello world!!!");
//Create a Rock Paper Scissors game against the computer

//Create randomly the computer choice
function getComputerChoice() {
  let number = Math.floor(Math.random() * 3) + 1;
  let choice;

  if (number === 1) {
    choice = "Rock";
  } else if (number === 2) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }

  return choice;
}

//Get and save the human choice
function getHumanChoice() {
  let question = prompt(
    "What is your choice? 1 = Rock, 2 = Paper and 3 = Scissors"
  );
  let choice;

  if (question === "1") {
    choice = "Rock";
  } else if (question === "2") {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }

  return choice;
}

//Initialize variables for scores
let humanScore = 0;
let computerScore = 0;

//Play round logic
function playRound(humanChoice, computerChoice) {
  alert(`Computer choose ${computerChoice}`);
  alert(`You choosed ${humanChoice}`);
  if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore += 1;
    alert("You win");
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore += 1;
    alert("You win");
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    humanScore += 1;
    alert("You win");
  } else if (humanChoice === computerChoice) {
    alert("Is a tie");
  } else {
    computerScore += 1;
    alert("You lost");
  }
  alert(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
}

function playGame() {
  while (humanScore + computerScore < 5) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    alert("You win the game");
  } else {
    alert("Computer win the game");
  }
}

playGame();
