//Wrap JS function in setTimeout function so it behaves properly in Chrome Browser
//Not going to be a problem as you don't juse prompts, alerts, etc, when loading page
//HTML contains instruction for user so we need it to appear with prompt
//${'document'}.ready; ====> jQuery equivalent

//if you want to be able to access the todos variable form the chrome developer console you need to put it in the global scope and not within the setTimeout function

const todos = ["Buy New Turtle"]
//if you put then indside of the setTImeout function it's scope will be local to the anoymous function(callback) and you won't be able to access it from the chrome console

window.setTimeout(function(){
  //put all your JS code from the lecture here

  //Ask user for input
  let input = prompt("What would you like to do?")


while(input !== "quit") {
  //handle input
  if(input === "list") {
    listTodos();
  } else if(input === "new") {
    addTodo();
  } else if(input === "delete") {
    deleteTodo();
  }

  //ask again for new input
  input = prompt("What would you like to do?")
}
console.log("OK, YOU QUIT THE APP");

function listTodos() {
  todos.forEach(function(todo, i){
    console.log("***********")
    console.log(i + ": " + todo);
  });
  console.log("***********")
}

function addTodo(){
  //ask for new todo
  const newTodo = prompt("Enter new todo");
  //add to todos array
  todos.push(newTodo);
  console.log("added todo")
}

function deleteTodo(){
  //ask for index of todo to be deleted
  let index = prompt("Enter index of todo to delete");
  //delete that todo
  //splice() |||| make a cut a remove a specific number of elemnts out of an array
  //first argument is where we want to make that cut | index that user provides
  //second arugment is how many itmes you want to delte following that index | this case delete one item
  todos.splice(index, 1);
  console.log("todo deleted!")
}
}, 500);

