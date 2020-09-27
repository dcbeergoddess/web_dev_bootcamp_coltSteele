/* Function Problem Set

**isEven**
- Write a function *isEven()* which take a single numerical argument and returns true if the number is even, and false otherwise
- hint: jog memory, modulo
```js
isEven(4);    //true
isEven(21);   //false
isEven(68);   //true
isEven(333);  //false
```
*/

//Solution

/*
function isEven(num) {
  //return true if even
  if(num % 2 === 0) {
    return true;
  } 
  //return false otherwise
  else {
    return false
  }
}
*/
//refactor above code
function isEven(num) {
  //this will either be true or false/boolean statment
  return num % 2 === 0;
}

/*
**factorial()**
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
*/

//Solution

/*
function factorial(num) {
  //define a result variable
  let result = 1;
  //calculate factorial and store value in result, starting at 1 is unessecary start at 2
  for(let i = 1; i <= num; i++) {
    //code below is a shortcut for next line
    result = result * i;
  }
  //return a result variable 
  
}
*/

function factorial(num) {
  //define a result variable
  let result = 1;
  //calculate factorial and store value in result
  for(let i = 2; i <= num; i++) {
    result *= i;
  }
  //return a result variable 
  return result
}

function factorialB(num) {
  let result = num; 
  for(let i = num-1; i >= 1; i--) {
    result *= i;
  }
  return result
} //but 0 will equal 0

//facotrial(4) 4 x 3 x 2 x 1

/*
**kebabToSnake()**

- write a function *kebabToSnake* which take a single kebab-cased string argument and returns the snake_cased version | different ways to write strings
- hint: look up how to replace characters in a string

```js
kebabToSnake("hello-world");      //hello_world
kebabToSnake("dogs-are-awesome"); //dogs_are_awesome
kebabToSnake("blah");             //blah
```
*/

//Solution

function kebabToSnake(str) {
  //replace all '-' with "_"'s
  //g expression(what you waht to replace), replace it with
  let newStr = str.replace(/-/g , "_")
  //return str
  return newStr;
}

