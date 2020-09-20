# JAVASCRIPT FUNCTIONS
- building block of JS

**OBJECTIVES**
1. Write function declarations and function expressions
2. Explain the differece between *console.log* and *return*
3. Define functions that take multiple arguments
4. Scope and Higher Order Functions


## Intro to Functions
**a fundamental building block**
OBJECTIVES
- Understand why we use functions
- Define a function without arguments
- Define a function with arguments
- Return a value from a function

### Functions
**Functions let us wrap bits of code up into REUSABLE packages. They are one of the building blocks of JS.**
```js
//DECLARE A FUNCTION FIRST/Define a block of Code

function doSomething() {
  console.log("HELLO WORLD");
}

//Then call it:

doSomething();
doSomething();
doSomething();
doSomething();

//=========Example 1===========//
function sayHi() {
  console.log("HELLO!");
  console.log("GOODBYE!");
}

sayHi();
// HELLO!
// GOODEBYE!

sayHi
//gives back the function/code itself

//=========Example 2===========//
function singSong() {
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");   
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}
// sing song 4 times
//to sing the entire song 4 times
singSong();
singSong();
singSong();
singSong();

```

### Arguments
**Often we want to write functions that take inputs**
```js
//how we write functions that take input
//expecting something to be passed in/expecting an argument
//hold value temporarily
function square(num) {
  console.log(num * num);
}
```
**Now when we call *square* we need to pass in a value**
```js
square(10); //prints 100
square(3); //prints 9
square(4); //prints 16

//============EXAMPLE===========//
function sayHello() {
  console.log("Hello There!")
}
sayHello()
//prints: Hello There!

function sayHello(name) {
  console.log("Hello There" + name + "!")
}
sayHello("Kiki")
//prints: Hello There Kiki!
```

#### MULTIPLE ARGUMENTS
**functions can have as many arguments as needed**
```js
//===========Examples============//
function area(length, width) {
  console.log(length * width); 
}
area(9,2); //18

function greet(person1, person2, person3) {
  console.log("hi " + person1)
  console.log("hi " + person2)
  console.log("hi " + person3)
}
greet("Harry", "Ron", "Hermoine");
//hi Harry
//hi Ron
//hi Hermoie
greet("Harry", "Ron");
//hi Harry
//hi Ron
//hi undefined

//!!!Above second version would break some languages but in JavaScript gave us back undefined!!!!//
//Sometimes you will need to write code to make sure that nothing is undefined///

//Arguments make function usuful, about making code chage a little bit depending on inputs


//For A Game: changing scores

addToScore(5)

// Writing Code for a Login:

checkCredentials(email, password) {
  // write code to login IF valid
  // ELSE show error message
}
```
**The ability of functions to take arguments if one of, if not the most important part of writing functions**
- It's not just about reapeating code it's about repeating code that we can change a little bit

#### The Return Keyword

Input ==> **FUNCTION** ==> Output

- Function are a machine, write a function and take some inputs (that would be the arguments) ==> They do somehting with thoose inputs (i.e. math, adds to score, login, etc) ==> and returns something in the end, output it sends back

```js

function square(x) {
  console.log(x*x);
}
square(4)
//prints: 16 in the console, looks like we have an output but we don't acutally have something being returned
//BIG DIFFERENCE
//use RETURN keyword: you can capture the value that is coming back out of the function
```
**_console.log_**: just prints to the console, only a developer would ever see that and can't use in any other part of code

**_return_**: keyword captures value for use

```js
"4 squared is: " + square(4)
//prints 16
"4 squared is undefined"
// becuase nothing is being returned

function square(x) {
  return x*x;
}
square(4)
//different way it shows int console
// the arrow is a return 
// <- 16

"4 squared is: " + square(4)
// returns
"4 squared is 16"

//in console
const result = square(104);
result
//returns below which is now stored in result
10816
```

**We use the *return* keyword to output a value from a function**

```js
//this function capitalizes the first char in a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const city = "paris";             //"paris"
const capital = capitalize(city); //"Paris

//we can capture the returned value in a variable
```

**The *return* keyword stops the execution of a function**

```js
function capitalize(str) {
  if (typeof str === "number") {
    return "that's not a string!"
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const city = "paris"              //"paris"
const capital = capitalize(city) //"Paris"

const num = 37
const capital = capitalize(num) //"that's not a string!"
```

#### Function Declarations vs Function Expressions

- Two different syntax to declare a function

```js
//function declaration
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//function expression
const capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```
##### Function Exercises
```js
//===============//
function test(x.y) {
  return y - x;
}

test(10, 40) //returns: 30

//===============//
function test(x) {
  return x*2;
  console.log(x)
  return x/2;
}

test(40) //returns 80 | execution stops | do not see console.log or return 20
```

## Function Problem Set

**isEven**
- Write a function *isEven()* which take a single numerical argument and returns true if the number is even, and false otherwise
- hint: jog memory, modulo
```js
isEven(4);    //true
isEven(21);   //false
isEven(68);   //true
isEven(333);  //false
```
**facotiral()**
- write a function *factorial* which takes a single numeric arguement and returns the factorial of that number
- hint: takes number and mulitples number by every integer below it
- variable you are constanly muliply by smaller numbers

====Examples=====
4! is 4 x 3 x 2 x 1 
6! is 6 x 5x 4x 3x 2x 1
0! is 1

```js
factorial(5);   //120
factorial(2);   //2
factorial(10);  //3628800
factorial(0);   //1
```

**kebabToSnake()**

- write a function *kebabToSnake* which take a single kebab-cased string argument and returns the snake_cased version | different ways to write strings
- hint: look up how to replace characters in a string

```js
kebabToSnake("hello-world");      //hello_world
kebabToSnake("dogs-are-awesome"); //dogs_are_awesome
kebabToSnake("blah");             //blah
```