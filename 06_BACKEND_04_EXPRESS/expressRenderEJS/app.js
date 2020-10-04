const express = require('express');
const app = express();
const PORT = 8080

//tells express to serve the contents of the directory public
app.use(express.static("public"));
//tells express to use ejs so we can leave .ejs off the res.render str being passed in
app.set("view engine", "ejs");

//ROOT ROUTE
app.get("/", (req, res) => {
  res.render("home")
});

//create conditional
app.get("/fallinlovewith/:thing", (req, res) => {
  let thing = req.params.thing;
  res.render("love", {thingVar: thing});
});

//FOR LOOPS
app.get("/posts", (req, res) => {
  let posts = [
    {title: "Post 1", author: "Susy"},
    {title: "Post 2", author: "Colt"},
    {title: "Post 3", author: "Dan"},
  ]

  res.render("posts", {postsArr: posts});
})


app.listen(PORT, () => {
  console.log("APP is listening on http://localhost:" + PORT);
});
