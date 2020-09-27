# JS Scope

- Scope is the context that code is exectued in
- what is visible inside that function
- nested functions inside functions

## EXAMPLE
```js
function doMath() {
  let x = 40;
  console.log(x);
}

//In console call function doMath()
    //prints: 40
// In console call variable x
    // prints Error: x is not defined 
```

Two different scopes above. X is not visible in global scope
FUNCTIONS have their own scope
FUNCTION are the child scope, they have access to variables declared outside their scope (the parent scope)

**If you declare a variable outside a function you can use it within a function but the oposite is not true**

## Exercise
```js

let num = 8

function doMath() {
  //add one
  num +=1;
  if(num % 5 == 0) {
    return true
  } else {
    return false
  }
}

//adds one then runs function so 8 gets incremented by 2
num += 1;
doMath ()

//true (10)
```

!! **Anytime you define a new function it gets its own new scope and it can access variables that were defined outside the function but inside the function if we define something its not accessible outside the function. Scope is not shared between functions. For Example:**


```js

function hi() {
  const name = "Rusty";
  console.log(name)
}

function bye() {
  console.log(name)
}

hi() //prints: Rusty
bye() //prints: undefined

//name not accesible within the scope of the bye function

```

