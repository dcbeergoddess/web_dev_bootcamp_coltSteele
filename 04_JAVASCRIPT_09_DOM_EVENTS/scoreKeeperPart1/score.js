const p1Button = document.querySelector("#p1")
const p2Button = document.getElementById("p2")

const p1Display = document.querySelector("#p1Display")
const p2Display = document.querySelector("#p2Display")

//create variable for p1Score
let p1Score = 0;
let p2Score = 0;

//two states for game: when player reaches 5 update gameover
let gameOver = false;
//compare this variable p1Score and p2Score to winningScore and if score reaces winningScore, gameover = true
const winningScore = 5;


const resetButton = document.querySelector("#reset")

p1Button.addEventListener("click", function(){
  //if gameOver has not been reached yet
  if(!gameOver){
    //add to Score
    p1Score++;
    //after add one to score check if it equals winning score
    if(p1Score === winningScore){
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
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }

})