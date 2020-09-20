# JAVASCRIPT ARRAYS

- First Data Structure (ways of storing data/holding information using javaScript)
- So far we have used variables to hold one piece of information (i.e name, phone number, number)
- Want to be able to hold multiple values(i.e names, etc) and store them all together

**Arrays**

- One of JavaScript's anwser to this problem

**OBJECTIVES**
1. Define and remove/add Data to arrays
2. Utilize built-in array methods
3. Console To-Do List Project

## Intro to Arrays
**Data Structure**
1. Understand arrays conceptually
2. Write code using JS arrays

### Example

- Model a Group of Friends

```js
const friend1 = "Charile";
const friend2 = "Liz";
const friend3 = "David";
const friend4 = "Mattias";

//This is a lot of code and doesn't let us group our friends together
//Not DRY Code
```
- Perfect Use Case for an Array
```js
//Group data in a list
const friends = ["Charile", "Liz", "David", "Mattias"]

//[]: Square Brakets denotes an array
// inside is the list seperated by commas

```
Charlie --- Liz --- David ---- Mattias     
  0 -------- 1  ----- 2 ----------3

- Arrays are indexed starting a 0. Every slot has a corresponding number
- we can use those indices to retrieve data

```js
const friends = ["Charile", "Liz", "David", "Mattias"]

console.log(friends(0)) //prints: Charlie

friends[1] + " <3 " + frineds[2] //prints: Liz <3 David
```

- UPDATE arrays
Charlie --- Liz --- David ---- Mattias     
  0 -------- 1  ----- 2 ----------3
```js
const friends = ["Charile", "Liz", "David", "Mattias"]

friends[0] = "Chuck";
friends[1] = "Lizzie";
```
Chuck --- Lizzie --- David ---- Mattias     
  0 -------- 1  ------ 2 ----------3

- ADD new data to arrays

Charlie --- Liz --- David ---- Mattias     
  0 -------- 1  ----- 2 ----------3
```js
const friends = ["Charile", "Liz", "David", "Mattias"]

//put in index that does not exist yet
friends[4] = "Amelie"; 
```
Charlie---Liz---David----Mattias--Amelie     
---0-------1------2---------3--------4  

### Another Example
- in console

```js
const colors = ["red", "orange", "yellow"]
//enter
colors[3] = "green"
//enter
colors
//returns
["red", "orange", "yellow", "green"]

//enter
colors[3] = "dark green"
colors[10] = "violet"
//returns
["red", "orange", "yellow", "dark green", undefined x6, "violet"]

//makes empty space in array with undefined
//there is another way to add data withiout needing to know the index
```
### Few Notes about Arrays
```js
//We can initialize an EMPTY array in two ways:
const friends = []; //no friends :(
const friends = new Array() //uncommon

//Arrays can hold any type of data
const random_collection = [49, true, "Hermonie", null];

//Arrays have a length property
const nums = [45,37,89,24];
nums.length //4

//highest index in array is always one less than the length
```

## Array Methods
**Getting more out of Arrays**

**OBJECTIVES**
- Arrays come with a few built-in methods!
1. push/pop
2. shift/unshift
3. indexOf
4. slice

- names originate from data structure called Stacks and Qs that exist in other programming languages. Sort of just leftovers and exist mainly becuase they've been used for a long time in other programming languages

Check out [MDN Reference for Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) For more built-in Methods!!!

1. ### Push and Pop

- use push to add to the end of an array
```js
const colors = ["red", "orange", "yellow"];
colors.push("green");
// ["red", "orange", "yellow", "green"]
//passing in green as an argument to push, and returns the legnth of the array after new data has been added
```
- use pop to remove the last item in an array
```js
const colors = ["red", "orange", "yellow"];
colors.pop();
// ["red", "orange"]

//pop() returns the removed element
const col = colors.pop(); //orange
```

2. ### Shift and Unshift

- use unshift to add to the aront of an array;
```js
const colors = ["red", "orange", "yellow"];
colors.unshift("infrared");
//["infrared","red", "orange", "yellow"];
```
- use shift to remove the first it in an array
```js
const colors = ["red", "orange", "yellow"];
colors.shift();
//"orange", "yellow"]

//shift() also returns the removed element
const col = colors.shift(); //orange
```

3. ### indexOf

- Use indexOf() to find the index of an item in an array
```js
const friends = ["Charile", "Liz", "David", "Mattias", "Liz"]

//returns the first index at which a given element can be found
friends.indexOf("David"); //2
friends.indexOf("Liz");   //1, not 4

//returns -1 if the element is not present
friends.indexOf("Hagrid"); //-1
```

4. ### Slice

- use slice() to copy parts of an array
```js
const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use slice to copy the 2nd and 3rd fruits
//specify index of where the new array STARTS(1) and ENDS(3)/non-inclusive 
const citrus = fruits.slice(1, 3);

//this does not alter the original fruits array
//citrus contains ['Orange', 'Lemon']
//fruits (unaltered) still contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']

//you can also use slice() to copy an entire array
const nums = [1.2,3]
const otherNums = nums.slice()
//both arrays are [1,2,3]
```

## Array Iteration
