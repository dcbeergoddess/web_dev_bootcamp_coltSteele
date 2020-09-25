# RGB COLOR GUESSING GAME

## ABOUT RGB
RGB(red, green, blue)
MAX number 255
```js
  "rgb(255, 0, 0)"  //all red
  "rgb(255, 255, 0)"  //all red and all green: yellow
  "rgb(0, 255, 0)"  //all green
  "rgb(0, 255, 255)"  //all green and all blue: cyan
  "rgb(0, 0, 255)"  //all blue
  "rgb(255, 0, 255)"  //all red and all blue: magenta
```
[CHECK OUT RGB color model on WIKI](https://en.wikipedia.org/wiki/RGB_color_model)

  **covers how mixing works for RGB**
- yellow: combine red, green
- magenta: combine red, blue
- cyan: combine green, blue
- white: combine all three
- black: no color

## APPLICATION GOALS
- color disapears if wrong
- all colors change to right color when picked
- NEW COLORS: reset colors
- hard = 6 choices
- easy = 3 choices
- ALL ELEMENTS ARE A RESPONSIVE SITE

### Part 2
- Create Simple Grid
- 6 squares with some background colors and spacing
- no animation, no rounded corners
- add basic logic of click events

### Part 3
- Add logic/events for what you want to happen when you click the wrong or right color rather than just having alerts
- ADD feature when you get right answer all squares and background chage to correct color
    - create changeColor() function
- get random colors in the array and then pick random color from that array
  - clean up code to reflect this change with a new function
- MATH.RANDOM and MATH.FLOOR - RANDOMIZE
```js
//DEFINE pickColor()
function pickColor(){
  //pick random number(Math.random automaticall generates random number between 0-1 but does not include 1) in colors array without decimial(math.floor)
  const random = Math.floor(Math.random() * colors.length)
  return colors[random];
}
```

### Part 4
  - don't use same 6 colors every time
  - generate random colors in array
    - create another function  
  - change h1 background when quess correctly  

### Part 5
  - ADD play again functionality to get NEW COLORS
    - reset game, pick random colors
  - PLAY AGAIN to reset when game won  
  - UPDATE styling
    - add stripe for NEW COLORS/PLAY AGAIN, with message

### Part 6
  - ADD EASY and HARD BUTTONS - imapact difficulty of game
  - hard is already selected when we load page
  - ADD logic to change amount of squares for easy or hard
    - need to hide 3 squares when easy clicked
  - create variable for numSqures to pass into generateRandomColors so when play again in easy to hard mode you only generate 

### Part 7
  - round corners
  - add space up top
  - change button styles/hover/position
  - keep text space in middle
  - fade out animation for wrong squares when disappear
  - etc, etc, etc,
  - STYLE STYLE STYLE 
  - transition
    --webkit (safari)
    -moz (mozilla)


### Part 8
  - style change: when you win
    - need message to reset when you hit play again
  - style change: BUTTON outline when clicked, change browser behavior
    - ouline: none
  - REFACTOR CODE (easyBtn and hardBtn)


### Part 9 
  - another place we can put the reset function
  - use it when page loads
  - init function in beginning
      - put all code that needs to run
      - add in mode listener buttons
      - code that changes the color of each square not needed
      - use reset
      - put loop with click listners for squares into init function to run at begining
      - then reset screen and make colors and empty array
      - pickedColor can be a variable with no value
  - split init function up into two functions
    - setupModeButtons();

  - later on we will learn DESIGN PATTERNS
  - More ways to clean up code
  - how we structure
  - module design pattern (add a bunch of properties into objects so we don't have any variables floating around that are not insdie fo an object and we dont' have any functions that are just on their own like this on the widow object)
  - rather we add themto our own object
    ```js
    //EXAMPLE
    const game = {}

    game.init = function(){
      setupModeButtons();
      setupSquares();
      reset();
    }

    game.init()

    ```
    - keeps things structured and organized
    - helps avoid namespace collisions 
  
