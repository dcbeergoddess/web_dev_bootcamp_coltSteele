```js
/*
========printReverse()================
write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order(don't actually reverse the array itself)
hint: use loop
*/

printReverse([1,2,3,4]);
//4
//3
//2
//1

printReverse(["a","b","c"]);
//"c"
//"b"
//"a"

/*
========isUniform()================
write a function isUniform() which takes in an array as an argument and rturns true if all elements in the array are identical
hint: use loop, varialbe that keep track of very first item in index, when not equal return false
*/

isUniform([1,1,1,1]);      //true
isUniform([2,1,1,1]);      //false
isUniform(["a","b","c"]);  //false
isUniform(["b","b","b"]);  //true



/*
========sumArray()================
write a function sumArray() that accepts an array of numbers and returns the sum of all the numbers in the array
hint: use loop, have variable called result where you store anwser and constantly add to it
*/

sumArray([1,2,3]);     //6
sumArray([10,3,10,4]); //27
sumArray([-5,100]);    //95

/*
========max()================
write a function max() that accepts an array of humbers and returns the maximum number in that array
hint: use loop, and variable that stores maximum number and everytime through loop update varialbe if number in loop is greater that maximum
*/

max([1,2,3]);     //3
max([10,3,10,4]); //10
max([-5,100]);    //100


/*
======== ================

*/

```