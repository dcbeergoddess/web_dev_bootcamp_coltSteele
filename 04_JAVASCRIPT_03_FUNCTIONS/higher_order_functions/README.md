# Higher Order Functions

**Functions that either take a function as an argument** 
**or they return another function**

## One Example of HOF
**_setInterval()_**
- Takes a function and calss that function at a specific interval that we provide
- With a loop you can repeat things but it happens immediately
- A FUNCTION that takes another FUNCTION as its ARGUMENT

```js
//Take two arguments: 1st Another Function, 2nd is the Interval
setInterval(anotherFunc, interval)

//======EXAMPLE=====//
function sing() {
  console.log("twinkle twinkle...")
  console.log("how i wonder...")
}

sing() 
//prints: 
//twinkle twinkle...
//how i wonder...

//NEXT: use setInterval to call sing every 1000 milliseconds/every second

setInterval(sing, 1000)
// will call whatever is inside of sing every 1000 milliseconds
// returns a number in the console (my case it was 1)
// don't need parentheses: we are not the one calling sing, setInterval is acutally calling sing. We don't want to call it we want setInterval to call it so we are just passing the value of sing

//to stop the Interval you need the number that got returned and pass it into clearInterval() function
clear Interval(1)
```

- It is possible to return another function but most often we'll be passing a function to another function

**CODE REFACTOR | ANONYMOUS FUNCTION**
- if we don't want to define a seperate function ahead of time we can use an anonymous function

```js
//don't give function name becuase never going to use again 
setInterval(function(){
  console.log("I am an anonymous function!");
  console.log("THIS IS AWESOME");
}, 2000) 

//Can not call function outside of setIinterval, it is defined inline
//purely a way to pass a group of code into setInterval
```

