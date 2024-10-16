
function rockPaperScissors(player1, player2) { //Function to run the rock, paper, scissors game

  return (player1 === player2) ? "draw" //Returns draw if the two variables passed are the same

   : (player1 === "rock" && player2 === "scissors") ? "player1"   //Returns player1's wins for the basic game
   : (player1 === "scissors" && player2 === "paper") ? "player1"  //Returns player1's wins for the basic game
   : (player2 === "rock" && player1 === "paper") ? "player1"      //Returns player1's wins for the basic game

   : (player2 === "rock" && player1 === "scissors") ? "player2"   //Returns player2's wins for the basic game
   : (player2 === "scissors" && player1 === "paper") ? "player2"  //Returns player2's wins for the basic game
   : (player1 === "rock" && player2 === "paper") ? "player2"      //Returns player2's wins for the basic game

   : (player1 === "lizard" && player2 === "spock") ? "player1"    //Returns player1's wins for the advanced game
   : (player1 === "spock" && player2 === "scissors") ? "player1"  //Returns player1's wins for the advanced game
   : (player1 === "rock" && player2 === "lizard") ? "player1"     //Returns player1's wins for the advanced game
   : (player1 === "paper" && player2 === "spock") ? "player1"     //Returns player1's wins for the advanced game
   : (player1 === "scissors" && player2 === "lizard") ? "player1" //Returns player1's wins for the advanced game
   : (player1 === "lizard" && player2 === "paper") ? "player1"    //Returns player1's wins for the advanced game
   : (player1 === "spock" && player2 === "rock") ? "player1"      //Returns player1's wins for the advanced game

   : (player2 === "lizard" && player1 === "spock") ? "player2"    //Returns player2's wins for the advanced game
   : (player2 === "spock" && player1 === "scissors") ? "player2"  //Returns player2's wins for the advanced game   
   : (player2 === "rock" && player1 === "lizard") ? "player2"     //Returns player2's wins for the advanced game
   : (player2 === "paper" && player1 === "spock") ? "player2"     //Returns player2's wins for the advanced game
   : (player2 === "scissors" && player1 === "lizard") ? "player2" //Returns player2's wins for the advanced game
   : (player2 === "lizard" && player1 === "paper") ? "player2"    //Returns player2's wins for the advanced game
   : (player2 === "spock" && player1 === "rock") ? "player2"      //Returns player2's wins for the advanced game

   : "Please each choose rock, paper, scissors, lizard, or spock"; //Returns that incorrect variables have been passed

}

console.log(rockPaperScissors("test","test"))








// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}