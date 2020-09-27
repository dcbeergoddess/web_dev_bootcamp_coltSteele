//Ask the user "Are we there yet"
//Keep asking again and again until they enter "yes" or "yeah"
//Then, alert "Yay, we finally made it"

// var answer = prompt("are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
//   var answer = prompt("are we there yet?");
// }

// alert ("Yay, We made it")

//Bonus: A user can enter any string as long as it contains "yes" in it
//INDEX OF
//is yes anywhere in the answer, if return index -1 it is not so loop will continue

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
  var answer = prompt("are we there yet?");
}

alert ("Yay, We made it")

