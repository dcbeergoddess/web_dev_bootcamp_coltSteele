//Get age and convert it to a NUMBER (prompt always returns a STRING)
var age = Number(prompt("What is your age?"));
// if they don't enter a number for age continues to prompt until number is entered
while(isNaN(age)) {
  age = Number(prompt("What is your age?"));
}

// If age is negative
if (age < 0) {
  console.log('Come back once you\'re out of the womb');
}

// If age is 21
if (age === 21) {
  console.log("Happy 21st Birthday")
}

//if age is odd
//(not evenly divisble by two)
if (age % 2 !== 0) {
  console.log("Your age is odd!");
}

//If age is a perfect square
if (age % Math.sqrt(age) === 0) {
  console.log("your age is a perfect square!");
}

//Another way for perfect square
// First part of if statement, Math.sqrt(age) + "" turns num to string
if((Math.sqrt(age) + "").includes(".") === false) {
  console.log("Your age is a perfect square")
}

//Another way to turn to string
if(!String(Math.sqrt(age)).includes(".")) {
  console.log("Your age is a perfect square")
}

//Refactor colts solution
if (!(age % Math.sqrt(age))) {
  console.log("your age is a perfect square!");
}