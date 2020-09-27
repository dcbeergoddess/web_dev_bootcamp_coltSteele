//Wrap JS function in setTimeout function so it behaves properly in Chrome Browser
//Not going to be a problem as you don't juse prompts, alerts, etc, when loading page
//HTML contains instruction for user so we need it to appear with prompt
//${'document'}.ready; ====> jQuery equivalent

//if you want to be able to access the todos variable form the chrome developer console you need to put it in the global scope and not within the setTimeout function

const todos = ["Buy New Turtle"]
//if you put then indside of the setTImeout function it's scope will be local to the anoymous function(callback) and you won't be able to access it from the chrome console

window.setTimeout(function(){
  //put all your JS code from the lecture here
  
  //LOGIC
  //Use an ARRAY to model our todo list | Start with Empty Array
  // const todos = [];

  //Ask user for input
  let input = prompt("What would you like to do?")

  //Check what input is | if LIST, NEW, QUIT then write code for each to run properly

  

//Keep asking over and over until user types quit
//While loop

while(input !== "quit") {
  //handle input
  if(input === "list") {
    console.log(todos);
  } else if(input === "new") {
    //ask for new todo
    const newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
  } 

  //ask again for new input
  input = prompt("What would you like to do?")
}
console.log("OK, YOU QUIT THE APP");

}, 500);

