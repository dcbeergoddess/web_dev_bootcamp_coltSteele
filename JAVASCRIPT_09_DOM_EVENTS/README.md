# DOM EVENTS
**MAKING THINGS INTERACTIVE**

- Events are EVERYWHERE
    - Clicking on a button
    - Hovering over a link
    - Dragging and Dropping
    - Pressing the Enter key

## THE PROCESS
  - We **select** an element and then add an **event listener** (manipulation)
    - "Listen for a click on this _button_ tag"
    - "Listen for a hover event on the _h1_ tag"
    - "Listen for a keypress event on a text input"

## THE SYNTAX
  - To add a listener, we use a method called _addEventListener_

```js
//use once we select an element
//two arguments: 1st: type of event you want to listen for, 2nd: the code you want to run when that event happens
element.addEventListener(type, functionToCall);
```
```js
const button = document.querySelector("button");
button.addEventListener("click", function(){
  console.log("SOMEONE CLICKED THE BUTTON!");
});
```
**EXAMPLE**
- Display a message when button is clicked
```html
<button>CLICK ME!</button>
<p>No One Has Clicked Me Yet</p>
```
```js
const button = document.querySelector("button");
const paragraph = document.querySelector("p");

//SETUP CLICK LISTENER
//usig arrow function for anyomous function!!!
button.addEventListener("click", () => {
  paragraph.textContent = "Someone Clicked the Button!"
})
```
_CHECK OUT **Demo_corgis** folder for more examples_
  - sometimes arrow function don't work when using keyword _this_

**EXAMPLE | USING NAMED FUNCTION**
- if you want to use the code somewhere else
```js
const button = document.querySelector("button");
const paragraph = document.querySelector("p");

button.addEventListener("click", changeText);

function changeTest(){
    paragraph.textContent = "Someone Clicked the Button!"
}
```
## EVENT REFERENCES
**Find other Event types!!**
[MDN EVENT REFERENCE](https://developer.mozilla.org/en-US/docs/Web/Events)

- Check out **moreEvents** folder for examples

### PLAYING WITH MDN PAGE TO COUNT ALL EVENTS
```js
//in console
document.querySelectorAll("tr").length - document.querySelectorAll("table").length
//435
```

