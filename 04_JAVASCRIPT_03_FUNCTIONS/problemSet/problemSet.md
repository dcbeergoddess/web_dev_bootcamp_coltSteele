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

#### My Solution

```js
function isEven(num) {
  if (num % 2 !== 0 ) {
    return false
  }
  return true
}
```

#### Colt Solution

```js

function isEven(num)

```


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

#### My Solution

```js
function factorial(num) {
  return 
}
```

#### Colt Solution

```js

function factorial(num)

```

**kebabToSnake()**

- write a function *kebabToSnake* which take a single kebab-cased string argument and returns the snake_cased version | different ways to write strings
- hint: look up how to replace characters in a string

```js
kebabToSnake("hello-world");      //hello_world
kebabToSnake("dogs-are-awesome"); //dogs_are_awesome
kebabToSnake("blah");             //blah
```

#### My Solution

```js
function kebabToSnake(str) {
  
}
```

#### Colt Solution

```js

function kebabToSnake(str)

```