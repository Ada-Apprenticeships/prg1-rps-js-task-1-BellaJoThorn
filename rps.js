function rockPaperScissors(player1, player2) { 

  //Creates a dictionary of arrays for which moves can win
  const winningChoices = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["rock", "scissors"]
  };

  //Returns "both" if the variables passed to the function are the same
  if (player1 === player2) {
    return "draw";
  };

  //Returns "player1" if player2's move is inlcuded in the corresponding array, otherwise returns "player2"
  return (winningChoices[player1].includes(player2)) ? "player1" : "player2";

}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}