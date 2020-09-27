/*If you complete the exercise, but your color choice shows "Wrong" even when it is correct, then take a look at your colors array and make sure that the colors have spaces after the commas in the RGB expression, otherwise the picked color will not match the randomly selected color.

e.g.,
Correct: "rgb(255, 0, 0)"
Incorrect: "rgb(255,0,0)"

if you're wondering how using padding-bottom: 30%; in the CSS will set the height for the squares then see here(https://stackoverflow.com/questions/5657964/css-why-doesn-t-percentage-height-work/5658062#5658062).
TL;DR: "When you specify the height or width as a percentage, that's a percentage with respect to the element's parent."
*/

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

//Every time the page loads, one color is the color we are looking for
//START BY HARDCODING
//GOAL COLOR IS CYAN
const pickedColor = colors[3];
const colorDisplay = document.getElementById("colorDisplay");


//UPDATE PAGE WITH RGB COLOR INFO
colorDisplay.textContent = pickedColor

//LOGIC CLICK EVENTS
//Compare pickedColor to square that is clicked on
  //if DIFFERENT we're going to change the background color of that square so that it goes to the same background color of the body
  //if SAME that means the player has won
    //then do some special things

//LOOP THROUGH & ASSIGN ONE OF COLORS FROM ARRAY
for(let i = 0; i < squares.length; i++) {
  //our i is going to go from 0 1 2 3 4 5 and loop through each square
  //When we get to the first square, going to take zero and give it the background color of colors zero and then keep going in the order of the divs using colors from the array

  //ADD INITIAL COLORS to squares
  squares[i].style.backgroundColor = colors[i];

  //ADD CLICK LISTENERS LOGIC | JUST MAKE ALERT FOR NOW
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    const clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      alert("Correct!");
    } else {
      alert("Try Again!")
    }
  })
}



