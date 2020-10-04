const express = require('express');
const app = express();
const PORT = 8080

//ROOT ROUTE
app.get("/", (req, res) => {
  res.render("home.ejs")
});

//create conditional
app.get("/fallinlovewith/:thing", (req, res) => {
  let thing = req.params.thing;
  res.render("love.ejs", {thingVar: thing});
});

//FOR LOOPS
app.get("/posts", (req, res) => {
  let posts = [
    {title: "Post 1", author: "Susy"},
    {title: "Post 2", author: "Colt"},
    {title: "Post 3", author: "Dan"},
  ]

  res.render("posts.ejs", {postsArr: posts});
})


app.listen(PORT, () => {
  console.log("APP is listening on http://localhost:" + PORT);
});
