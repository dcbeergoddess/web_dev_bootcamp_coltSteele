const express = require('express');
const app = express();
const PORT = 8080;

//# DIFFERNT ROUTES

//HOMEPAGE/ROOT ROUTE or PATH
app.get("/", (req, res) => {
  res.send("Hi there, Welcome to my assignment!")
})

// "/speak/:animal" = print "The :animal says "sound"
//dog:Woof Woof
//cow:Moo
//pig:oink

app.get("/speak/:animal", (req, res) => {

  //create dictionary of animal sounds using and OBJECT
  const sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof",
    cat: "I hate people",
    pitbull: "i want to cuddle"
  }

  //need to extract the animal | MAKE VARIABLE | down case animal as it come in so Dog, Pig, etc work
  let animal = req.params.animal.toLowerCase();
  //the sounds now equal sounds of animal 
  let sound = sounds[animal];
  
  res.send("The " + animal + " says '" + sound + "!'")
});  
//"/repeat/:word/:num" - should print word total num of times

app.get("/repeat/:word/:num", (req, res) => {
  console.log(req.params)
  //extract the message and number of times
  let word = req.params.word;
  let num = Number(req.params.num)
  //to add meassage number of times, create an empty string for result to add to later within the loop
  let result = ""
  console.log(word)
  console.log(num)
  
  //create for loop
  //need to add message to a variable so every time through the loop we are adding a message
  //we can only do res.send ONE TIME
  //build up empty string in result as you go through the loop
  for(let i = 0; i < num; i++){
    result += word + " ";
  }

  res.send(result)

});

//CATCH ALL
app.get("*", (req, res) => {
  res.send("Sorry, page not found...What are you doing with your life?")
})



app.listen(PORT, () => {
  console.log("App listening on http://localhost/" + PORT);
})

