const express = require('express');
const app = express();
const PORT = 8080

//ROOT ROUTE
app.get("/", (req, res) => {
  res.render("home.ejs")
});

app.get("/fallinlovewith/:thing", (req, res) => {
  let thing = req.params.thing;
  res.render("love.ejs", {thingVar: thing});
});


app.listen(PORT, () => {
  console.log("APP is listening on http://localhost:" + PORT);
});
