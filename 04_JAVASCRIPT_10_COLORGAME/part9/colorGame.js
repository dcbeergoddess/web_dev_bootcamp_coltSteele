let numSquares = 6;
let colors = [];
let pickedColor;
//SELECTORS
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  };
}

function setupSquares() {
    //LOOP THROUGH & ASSIGN ONE OF COLORS FROM ARRAY
    for (let i = 0; i < squares.length; i++) {
      //add click listeners to squares
      squares[i].addEventListener("click", function () {
        //grab color of clicked square
        const clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if (clickedColor === pickedColor) {
          messageDisplay.textContent = "Correct!";
          resetButton.textContent = "Play Again?";
          changeColor(clickedColor);
          h1.style.backgroundColor = clickedColor;
        } else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again!";
        }
      });
    }
  
}

/*===========CODE REFACTOR ABOVE/SPLIT FUNCTIONS UP=========
function init() {
  //mode buttons event listeners
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }

  //LOOP THROUGH & ASSIGN ONE OF COLORS FROM ARRAY
  for (let i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function () {
      //grab color of clicked square
      const clickedColor = this.style.backgroundColor;
      //compare color to picked color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
  //run reset function
  //will generate colors so we can define colors up top as empty array
  reset();
}
==================================================*/
function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {
  reset();
});

//Add CHANGE COLOR FUNCTION for Correct Answer
function changeColor(color) {
  //loop through all squares
  for (let i = 0; i < squares.length; i++) {
    //Change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

//DEFINE pickColor()
function pickColor() {
  //pick random number(Math.random automatically generates random number between 0-1) in colors array without decimial(math.floor)
  //use length of array to generate color
  //save to variable random
  const random = Math.floor(Math.random() * colors.length);
  //use variable to access an element from the array at that index
  return colors[random];
}

function generateRandomColors(num) {
  //Make Array
  const arr = [];
  //repeate num times
  for (i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0-255 | Math.random * one more than number you want to end with
  const r = Math.floor(Math.random() * 256);
  //pick a "green" from 0-255
  const g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0-255
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
