// import framework
const express = require('express');
// need to declare is in a variable since express is a framework and does more than one thing, "app" is pretty standard
const app = express();
const PORT = 8080; //3000 //8000 //8080
//don't use 80 or 443

// CREATE 3 DIFFERENT ROUTE

// "/" => "Hi there!" | Root Path
app.get("/", function(req, res){
  res.send("Hi there!");
})

// "/bye" =>  "Goodbye!"
app.get("/bye", function(req, res){
  res.send("Goodbye!")
})
// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
  console.log("SOMEONE MADE A REQUEST TO /DOG!!")
  res.send("Meow!")
});

app.get("/r/:subredditName", function(req, res){
  let subreddit = req.params.subredditName;
  res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
  console.log(req.params)
  res.send("WELCOME to tHE COMMENTS PAGE");
});

//splat/star route matching
//want to put last in route order
app.get("*", function(req, res){
  res.send("YOU ARE A STAR");
});


//Tell Express to listen for requests (START SERVER)
//proccess.env.PORT, process.env.IP (what colt used)

app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
})
