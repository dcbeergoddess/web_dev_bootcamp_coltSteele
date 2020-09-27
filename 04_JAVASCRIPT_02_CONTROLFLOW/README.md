# JavaScript Control Flow

- Making desicions and controlling the way our code runs
- Conditional Statements
- Loops

**OBJECTIVES**

1. Evaluate complex logical expressions 
2. Write 3-part JS conditional statements
3. Write JS while loops and for loops
4. Translate between while and for loops

## Boolean Logic
- True, False, and beyond

- Everything starts with the idea that a statement is either True or False
- Then we can combine those initial statements to create more complex stements that also evalute to True or False

### Comparison Operators

```
Assuming x = 5

>     | Greater than                 | x > 10    | false
>=    | Greater than or equal to     | x >= 5    | true
<     | Less than                    | x < -50   | false
<=    | Less than or equal to        | x <= 100  | true
==    | Equal to                     | x == "5"  | true
!=    | Not equal to                 | x != "b"  | true
===   | Equal value and type         | x === "5" | false
>     | Not equal value irequal type | x !== "5" | true

```

- two ways to check for equality and non-equality
- double equals vs triple equals

- type coercion (double equals permorms this while triple does not)

**EQUALITY OPERATORS**

"==" vs "==="

```js

var x = 99;

x == "99" //true

x === "99" //false


var y = null

y == undefined //true

y === undefined //false

/////====Few Interesting Cases====//////
true == "1"    //true
0 == false     //true
null == undefined //true
NaN = NaN      //false //weird quirk in javascript

```

"=": Assignment operator

"==" : type coercion : takes two numbers or strings or variables and tries to turn them into a similar type so it can compare them, trys to make them the same format

"===" : does not perform coercion : scrict equals

### Logical Operators
**AND, OR, and NOT**

- Assuming x = 5 and y = 9

Operator | Name  | Example            | Result
------------------------------------------
&&       | AND   | x < 10 && x !== 5  | false
||       | OR    | y > 9 || x === 5   | true
!        | NOT   | !(x === y)         | true

**Truthy and Falsy Values in JavaScript**

- Falsy Values
  - false
  - 0 
  - ""
  - undefined
  - Nan
- EVERYTHING ELSE IS TRUTHY including "false" as a string

## JS CONDITIONALS
**making desicions with code**


- Three JavaScript KeyWords
    - If
    - Else if
    - Else

### EXAMPLE
If you are younger than 18
  you cannot enter the venue

If you are between 18 and 21
  you can enter but cannot drink

Otherwise
  you can enter and drink

``` js

  if(age < 18) {
  console.log("sorry, you are not old enough to ender the venue")
  } 
  else if(age > 18 && age < 21) {
    console.log("You can enter, but cannot drink");
  } 
  else 


//REFACTOR ABOVE CODE

  if(age < 18) {
  console.log("sorry, you are not old enough to ender the venue")
  } 
  else if(age < 21) {
    console.log("You can enter, but cannot drink"); //This code will only run if first statement is false
  } 
  else {
    conosle.log("Come on in. You can drink");
  }


```

NOTE: In the next lecture there is a typo in the slides at 8 minutes and 9 seconds, the slides should say that an infinite loop occurs when the terminating condition never returns false.

## LOOPS
**Repeating Things**
OBJECTIVES
- Understand the purpose of loops
- Define "DRY" code
- write simple while loops

### DRY: Don't Repeat Yourself
- Writing clean code

### While Loops
- Repeat code WHILE a conditing is true
```js
while(someCondition) {
  //run some code
}
```
- It's very similar to an if statment, except it repeats a give code block instead of just running it once

**Example**
```js
const count = 1;
while(count < 6) {
  console.log("count is: " + count);
  count++;
}
//count is: 1
//count is: 2
//count is: 3
//count is: 4
//count is: 5

const count = 5;
while(count <= 20) {
  console.log("count is: " + count);
  count++;
}
// prints out from number 5-20 on individual lines

const count = 5;
while(count <= 20) {
  console.log("count is: " + count);
  count +=2;
}
//count is: 5
//count is: 7
//etc. till you get to 19
```
**STRINGS**
```js
//string we're looping over:
const str = "hello";
//first character is at index 0
const count = 0

while (count < str.length) {
  console.log(str[count]);
  count++;
}
//"h"
//"e"
//"l"
//"l"
//"o"
```
**Infinite Loops**
- occur whne terminaitng consiitng in a loop is never false
- crash browser, take up memory

EXAMPLE
```js
const count = 0
while(count < 10) {
  console.log(count);
}
//This example prints "0" over and over because count is never incrememnted
```
PRINT OUT MULTIPLES OF 4
```js
const num = 1;
while(num <= 20) {
  if(num % 4 === 0){
    console.log(num);
  }
  num++
}
```
INDEX OF
```js

const str = "hello world";

str.indexOf("w");
//prints: 6 

str.indexOf("world")
//prints: 6

str.indexOf("yes")
//prints: -1 (becuase not in index)

```

### For Loops
**Another Type of Loop**

OBJECTIVES
- Understand the purpose of *for loops*
- write valid *for loops*
- compare and contrast *while loops* and *for loops*

- Both let us repeate code but different in syntax and used at different times

EXAMPLE SYNTAX 
```js
//init=initialize
//conditon=while, etc
//step=how to incrmente or run loop until done

for(init; condition; step) {
  //run some code
}

//Printing numbers from 1-5 with a for loop
for(let count = 1; count < 6; count++) {
  console.log(count);
}

//Printing numbers from 1-5 in a while loop

let count = 1;
while(count < 6) {
  console.log("count is: ") + count;
  count++;
}

//Printing each character in a string with a for loop
let str = "hello"

for(let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

//AND WITH WHILE LOOP
let str = "hello";
let count = 0;

while(count < str.length) {
  console.log(str[count]);
  count++;
}

//=======EXERCISES==========//
//Exercise 1
for(let i = 0; i < 16; i+=8) {
  console.log(i);
}
//0
//8 

//Exercise 2
let str = "ahceclwlxo";
for(let i = 1; i <s tr.length; i+=2) {
  console.log(str[i]);
}
//h
//e
//l
//l
//o
```

