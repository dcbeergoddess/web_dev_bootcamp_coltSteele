//create secretNumber
const secretNumber = 4;

//ask user for guess
const stringGuess = prompt("Guess a number");
const guess = Number(stringGuess);


//check if guess is right
if (guess === secretNumber) {
  alert("You got it right");
}

//check if guess if higher
else if(guess > secretNumber) {
  alert("Too high. Guess again!");
}

//otherwise, check if lower
else {
  alert("Too low. Guess again");
}
