//Give Each One a Different Color
//Won't randomize colors like the finished application
    //when randomize it's 3 different numbers that we will combine and put in string "rgb(x, y, z)"
const colors = [
  "rgb(255, 0, 0)", //all red
  "rgb(255, 255, 0)", //all red and all green: yellow
  "rgb(0, 255, 0)", //all green
  "rgb(0, 255, 255)", //all green and all blue: cyan
  "rgb(0, 0, 255)", //all blue
  "rgb(255, 0, 255)", //all red and all blue: magenta
]

//SELECT all six squares
const squares = document.querySelectorAll(".square");

//RANDOMIZE pickedColor
const pickedColor = pickColor();

//SELECT colorDisplay <span>
const colorDisplay = document.getElementById("colorDisplay");

//SELECT message span
const messageDisplay = document.querySelector("#message")

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