//GENERATE RANDOM COLORS INSTEAD OF USING HARD CODED ARRAY | take single arument that decides how many items to generate
const colors = generateRandomColors(6);

//SELECT all six squares
const squares = document.querySelectorAll(".square");

//RANDOMIZE pickedColor
const pickedColor = pickColor();

//SELECT colorDisplay <span>
const colorDisplay = document.getElementById("colorDisplay");

//SELECT message span
const messageDisplay = document.querySelector("#message");

//SELECT h1 
const h1 = document.querySelector("h1");

//UPDATE PAGE WITH RGB COLOR INFO
colorDisplay.textContent = pickedColor

//LOGIC CLICK EVENTS
//Compare pickedColor to square that is clicked on
  //if DIFFERENT we're going to change the background color of that square so that it goes to the same background color of the body
  //if SAME that means the player has won
    //then do some special things

//LOOP THROUGH & ASSIGN ONE OF COLORS FROM ARRAY
for(let i = 0; i < squares.length; i++) {
  //ADD INITIAL COLORS to squares
  squares[i].style.backgroundColor = colors[i];

  //ADD CLICK LISTENERS LOGIC | JUST MAKE ALERT FOR NOW
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    const clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      //match background Color
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  })
}

//Add CHANGE COLOR FUNCTION for Correct Answer
function changeColor(color) {
  //loop through all squares
  for(let i = 0; i < squares.length; i++){
    //Change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

//DEFINE pickColor()
function pickColor(){
  //pick random number(Math.random automatically generates random number between 0-1) in colors array without decimial(math.floor)
  //use length of array to generate color
  //save to variable random
  const random = Math.floor(Math.random() * colors.length)
  //use variable to access an element from the array at that index
  return colors[random];
}

function generateRandomColors(num) {
  //Make Array
  const arr = []
  //repeate num times
  for(i=0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor())
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0-255 | Math.random * one more than number you want to end with
  const r = Math.floor(Math.random() * 256)
  //pick a "green" from 0-255
  const g = Math.floor(Math.random() * 256)
  //pick a "blue" from 0-255
  const b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")"
}