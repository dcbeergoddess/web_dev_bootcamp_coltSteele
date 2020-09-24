const button = document.querySelector("button");
let isPurple = false;

/*
button.addEventListener("click", function(){
  document.body.style.background = document.body.style.background === "purple" ? "white" : "purple"
})
*/

//or //create varibale for boolean value isPurple
/*
button.addEventListener("click", function(){
  //if white
    //make it purple`
  if(isPurple) {
    document.body.style.background = "white"; 
    isPurple = false;  
  } else {
    document.body.style.background = "purple";
    isPurple = true;   
  }

  //else
    //make it white
})
*/

//ANOTHER WAY TO CHANGE VALUE OF ISPURPLE
/*
button.addEventListener("click", function(){
  //if white
    //make it purple`
  if(isPurple) {
    document.body.style.background = "white"; 
      //else
    //make it white  
  } else {
    document.body.style.background = "purple";  
  }
  isPurple != isPurple;
});
*/

//USING CSS CLASSES
button.addEventListener("click", function(){
  //using className (don't have to keep track if it's purple or white)
  document.body.classList.toggle("purple");   
});