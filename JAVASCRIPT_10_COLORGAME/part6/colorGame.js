//Make it so click reset button you only generate 3 squares for easy mode when you play again instead of generating 6 even though it still only displays 3 squares, in background it was still generating 6 rbg numbers but displaying 3 squares
let numSquares = 6
//GENERATE RANDOM COLORS INSTEAD OF USING HARD CODED ARRAY | take single arument that decides how many items to generate
let colors = generateRandomColors(numSquares);

//SELECT all six squares
const squares = document.querySelectorAll(".square");

//RANDOMIZE pickedColor
let pickedColor = pickColor();

//SELECT colorDisplay <span>
const colorDisplay = document.getElementById("colorDisplay");

//SELECT message span
const messageDisplay = document.querySelector("#message");

//SELECT h1 
const h1 = document.querySelector("h1");

//SELECT reset button
const resetButton = document.querySelector("#reset")

//SELECT EASY and HARD buttons
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected")
  easyBtn.classList.add("selected")
  //3 squares 
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  //pick new pickedColor
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  //create for loop to loop through all 6squares and use colors variable with 3 random colors generated
  //colors[i] only change 3 colors becuase only 3
  for(let i = 0; i < squares.length; i++){
    //if there is a next color change it
    //check if there is a color at that index 
    if(colors[i]) {
      //change first 3
      squares[i].style.backgroundColor = colors[i];
    } else {
      //hide bottom 3
      squares[i].style.display = "none"
    }
  }
})

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected")
  easyBtn.classList.remove("selected")
  numSqures = 6
  colors = generateRandomColors(numSquares)
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++){
      //a little wastefull becuase change all squares instead of just last 3 to display again
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block"
  }})

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor
  //change colors of squares on page | like below
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323"
  resetButton.textContent = "New Colors";
})

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
      resetButton.textContent = "Play Again";
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