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

console.log(getComputerChoice());
