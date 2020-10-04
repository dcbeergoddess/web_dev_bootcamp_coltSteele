const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("home");
})

//show a list of friends
app.get("/friends", (req, res) => {
  let friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
  res.render("friends", {friends: friends});
})

//post a new friend
app.post("/addFriend", (req, res) => {
  res.send("YOU HAVE REACHED THE POST ROUTE")
})

app.listen(PORT, () => {
  console.log("APP is listening on http://localhost:" + PORT);
})