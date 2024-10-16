const readline = require("readline-sync")

let player1Choice = readline.question("Player 1, choose rock, paper, or scissors!")
let player2Choice = readline.question("Player 2, choose rock, paper, or scissors!")

function rockPaperScissors(player1, player2) {

  return (player1 === player2) ? "draw"
   : (player1 == "rock" && player2 == "scissors") ? "player1"
   : (player1 == "scissors" && player2 == "paper") ? "player1"
   : (player2 == "rock" && player1 == "scissors") ? "player2"
   : (player2 == "scissors" && player1 == "paper") ? "player2"
   : (player1 == "rock" && player2 == "paper") ? "player 2"
   : (player2 == "rock" && player1 == "paper") ? "player1"
   : "Please each choose rock, paper, or scissors";

}

console.log(rockPaperScissors(player1Choice, player2Choice))








// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}