/*
Around 14 minutes and 45 seconds into the next lecture, Colt says: "we're going to take this numInput.value and turn it into a String".

He should have said "..and turn it into a Number". Small mixup there, so I just wanted to make this note in case anyone got confused.
*/

//SELECT PLAYER BUTTONS
const p1Button = document.querySelector("#p1")
const p2Button = document.getElementById("p2")

//SELECT RESET BUTTON
const resetButton = document.querySelector("#reset")

//SELECT SPANS
const p1Display = document.querySelector("#p1Display")
const p2Display = document.querySelector("#p2Display")

//SELECT INPUT
const numInput = document.querySelector("input");
//SELECT WINNING SCORE DISPLAY IN PARAGRAPH
const winningScoreDisplay = document.querySelector("p span") 

//create variable for p1Score
let p1Score = 0;
let p2Score = 0;

//two states for game: when player reaches 5 update gameover
let gameOver = false;
//compare this variable p1Score and p2Score to winningScore and if score reaces winningScore, gameover = true
let winningScore = 5;

//CAN REFACTOR THESE TWO EVENT LISTENERS: WE WILL SEE WAYS TO DO THIS LATER
p1Button.addEventListener("click", function(){
  //if gameOver has not been reached yet
  if(!gameOver){
    //add to Score
    p1Score++;
    //after add one to score check if it equals winning score
    //console.log score vs winningScore, when you change input you can see that winning score is a string before we add code to convert the numInput string into a number
    console.log(p1Score, winningScore)
    if(p1Score === winningScore){
      //add classList .winner 
      p1Display.classList.add("winner")
      //change state to gameOver = true/if true the code does not run
      gameOver = true;
    }
    //update in Display
    p1Display.textContent = p1Score; 
  }
})

p2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      p2Display.classList.add("winner")
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }

})

//RESET BUTTON
//CHANGE p1Score and p2Score back to 0
//Change Display to 0
//untoggle .winner 
//change gameOver back to false

resetButton.addEventListener("click", function(){
  //took code out and put into a reset()
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
};

//CHANGING INPUT TO CHANGE WINNING SCORE
//NOT A CLICK EVENT
//CHANGE EVENT: runs anytime the value changes no matter how it changed
numInput.addEventListener("change", function(){
  //input.value is a string of number put in input which we selected under numInput
  //"this" = numInput
  winningScoreDisplay.textContent = this.value;
  //update winningScore variable, change numInput.value to be a number instead of a string
  //console.log with display new input as a number
  winningScore = Number(this.value);
  //if we change input in middle of game we want it to reset
  //take reset code out of reset button event listner and create a reset function we can call here
  reset();
})

