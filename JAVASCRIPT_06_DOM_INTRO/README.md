# THE DOM | Document Object Model

- The Document Object Model is the interface between your Javascript and HTML + CSS
- Bunch of special JS objects, methods, function that we can use to interact with our HTML/CSS to change thigs and we can add elements, remove elements, change colors, animate things, etc.

- The browser turns every HTML tag into a JavaScript OBJECT that we can MANIPULATE
- Everything is sotred inside of the _document_ object (can use console to see document object, i.e 
- console.dir(document) //prints out entire document object

DOCUMENT: is the root node object that all other objects (body tag, h1 tag, etc) are nested under as they are turned into objects

## SELECT and MANIPULATE

- SELECT an elemnt and then MANIPULATE

- For Example: change the <h1> color using JS

```js
//SELECT an element
const h1 = document.querySelector("h1"); //may need to check if these needs to be let or const.. I believe it should be const
//SELECT h1 and save to a varialbe

//MANIPULATE
h1.style.color = "pink";
//h1(variable).style(is a huge object with bunch of other properties including color).color

/*=====ANOTHER EXAMPLE===========*/

//SELECT the <body> and change its color every second

const body = document.querySelector("body"); //SELECT
const isBlue = false; //need to know if going from white to blue or blue to white, start at white

setInterval(function() { //MANIPULATE
  //starts as false(page is white when first loads)
  //runs again and then starts as blue and chages to white
  //code repeates over and over
  if(isBlue) {
    body.style.background = "white";
  } else {
    body.style.background = "#3498db";
  }
  isBlue = !isBlue;
}, 1000); //calls code every one second

```




