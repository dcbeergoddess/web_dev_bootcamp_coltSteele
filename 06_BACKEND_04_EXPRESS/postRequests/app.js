const express = require('express');
const app = express();

//FIRST REQUIRE BODY-PARSER
const bodyParser = require('body-parser');

const PORT = 8080;

app.use(express.static("public"))

//TELL EXPRESS TO USE BODY-PARSER
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs")

let friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", (req, res) => {
  res.render("home");
})

//show a list of friends
app.get("/friends", (req, res) => {
  res.render("friends", {friends: friends});
})

//post a new friend
app.post("/addFriend", (req, res) => {
  //req.body is an object that will contain all the data from the request body
  //all form data is in the req.body
  //i.e. newFriend=bob = undefined if don't have body parser
  //express does not create a req.body out of the box
  //need to tell it to take body and turn it into an object for us
  const newFriend = req.body.newfriend;
  friends.push(newFriend);

  res.redirect("/friends");
})

app.listen(PORT, () => {
  console.log("APP is listening on http://localhost:" + PORT);
})