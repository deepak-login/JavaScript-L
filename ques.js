//Create a game where you start with any random game number. Ask the user to keep guessing the game until the user enters correct value.
let gameNum = 25;
let userNum = prompt("Guess the game number : ");

while (userNum != gameNum) {
  userNum = prompt("you entered wrong number. Guess again :");
}

console.log("congratulations, you entered the right number");