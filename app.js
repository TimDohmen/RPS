let choices = ["rock", "paper", "scissors", "bug"]
let playerChoice = ["rock", "paper", "scissors", "bug"]
let compWins = 0;
let playerWins = 0;
let draw = 0;

function setScore() {
  let element = document.getElementById("score")
  element.textContent = `Scoreboard : \nComputer ${compWins}\n Player ${playerWins} \nDraw ${draw}`
}


function compRand() {

  let compChoice = choices[Math.floor(Math.random() * choices.length)];
  return compChoice
}

function play(playerChoice) {
  let compFinal = compRand()
  if (playerChoice === compFinal) {
    alert("You chose the same as the computer! \nDraw!"); draw++;
  } else if (playerChoice === "paper" && compFinal === "rock") {
    alert("Opponent Chooses Rock\n you smother the rock and win!"); playerWins++;
  } else if (playerChoice === "scissors" && compFinal === "rock") {
    alert("Opponent Chooses Rock\n you get smashed by the rock and lose.."); compWins++;
  } else if (playerChoice === "bug" && compFinal === "rock") {
    alert("Opponent Chooses Rock\n You crawl away from the rock barely surviving \n Winner!"); playerWins++;
  } else if (playerChoice === "paper" && compFinal === "scissors") {
    alert("Opponent Chooses Scissors\n The scissors turn you into paper machet \n You Lose"); compWins++;
  } else if (playerChoice === "rock" && compFinal === "scissors") {
    alert("Opponent Chooses Scissors\n you smash your opponents scissors and win!"); playerWins++;
  } else if (playerChoice === "bug" && compFinal === "scissors") {
    alert("Opponent Chooses Scissors\n your opponent tries to cut you but your shell is too durable \n Winner!"); playerWins++;
  } else if (playerChoice === "rock" && compFinal === "paper") {
    alert("Opponent Chooses Paper\n and covers you up. \n You lose"); compWins++;
  } else if (playerChoice === "scissors" && compFinal === "paper") {
    alert("Opponent Chooses Paper\n you cut your opponent into a beautiful butterfly \n Winner!"); playerWins++;
  } else if (playerChoice === "bug" && compFinal === "paper") {
    alert("Opponent Chooses Paper\n no way paper could kill this bug! \n Winner!"); playerWins++;
  } else if (compFinal === "bug") {
    alert("I am the almighty Cockroach!\n You will never defeat me!\n Loser! Try again"); compWins++;
  }
  setScore()
}




// function play(playerChoice) {
//   let compChoice = compRand

//   if (playerChoice == compChoice) {
//     alert("draw");
//   } else if (playerChoice === "paper" || compChoice === "rock") {
//     alert("you smother the rock and win!");
//   } else if (playerChoice === "scissors" || compChoice === "rock") {
//     alert("you get smashed by the rock");
//   } else {
//     alert("nothing can kill this bug");
//   }
