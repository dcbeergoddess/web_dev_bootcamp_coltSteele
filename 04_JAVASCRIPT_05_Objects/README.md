# JavaScript Objects

**_JavaScript DATA STRUCTURE_**

**Objectives**
1. Understand Objectives Conceptually
2. Write code using JS objects

## EXAMPLE

  - model a single person: name, age, and city
  ```js
  //could use an array: 
  const person = ["Cindy", 32, "Missoula"]

  //generally arrays are a list in logical order

  //to retrieve the person's hometown:
  person[2] //not very meanigful code

  //what if order reversed accidentally
  const person2 = ["Travis", "Los Angeles", 21]
  ```

  - this is the perfec case for an OBJECT
  ```js
  const person = {
    name: "Cindy",
    age: 32,
    city: "Missoula"
  };
  ```

## OBJECTS

- Store data in KEY-VALUE PAIRS
- property: Value

```js
const person = {
  name: "Travis",
  age: 21,
  city: "LA"
};
```
- NOTE: Unlike arrays, objects have no built-in order (i.e. index)
- value stored under property name
'Travis'-----21-----LA
name--------age----city

- Property: Value

## Retrieving Data
- TWO CHOICES: bracket and dot notation

```js
const person = {
  name: "Travis",
  age: 21,
  city: "LA"
};

//bracket notation, similar to arrays(but use string instead of number):
console.log(person["name"]);
//dot notations: 
console.log(person.name);

/* Few DIFFERENCES between the 2 NOTATIONS */
//=========================================//
//you CANNOT use DOT notation if the propery starts with a number
someObject.1blah    //INVALID
someobject["1blah"] //VALID!

//you CAN lookup things using a variable with BRACKET notation
//see occassionally 
const str = "name"
someObject.str    //doesn't look for "name"
someObject["str"] //does evalute str and looks for "name"

//you CANNOT use DOT notation for property names with spaces
//propery with space not good practice anyways
someObject.fav color    //INVALID
someObject.["fav color"] //VALID!
```
## Updating DATA
- just like an array: access a property and reassign it
```js
const person = {
  name: "Travis",
  age: 21,
  city: "LA"
};

//to update age (can use brackets or dot notation)
person["age"] +=1
//to update city
person.city = "London"
```
- UPDATED OBJECT
'Travis'-----22-----London
name--------age----city

## Creating Objects
  - Like arrays, there are a few methods of INITIALZING OBJECTS

```js
//make an empty object and then add to it
const person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA"

//all at once (Object literal notation)
const person = {
  name: "Travis",
  age: 21,
  city: "LA"
};

//another way of initalizing an Object
//won't see very often until much later in JavaScript
const person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA"
```

## OBJECT EXAMPLE 2
  - Objects can hold all sorts of data
  - strings, numbers, booleans, arrays, other objects

```js
const junkObject = {
  age: 57,
  color: "purple",
  inHungry: true,
  friends: ["Horatio", "Hamlet"],
  pet: {
    name: "Rusty",
    species: "Dog",
    age: 2
  }
};
```

### Comparing Arrays and Objects

- ARRAYS
  - use to store a list of data
  - specific and particular order/every item is bound to an index
  - A very special type of object where the keys are always numbers, they are still a KEY VALUE PAIRS i.e 0:Rusty, 1:Lucky, 2:bubba

- OBJECTS
  - no particular order
  - gelatinous blob with a bunch of things floating around inside
  - KEY VALUE PAIRS
  - in some languages objects are referred to as dictionaries (words and corresponding definitions = key value pairs)

    ## SYNTAX
      ```js
      /* ARRAY */
      //===================//
      const dogs = ["Rusty", "Lucky", "Bubba"]
      //Retrieve second item
      dogs[1]
      // ARRAYS: 
          //very special type of object where the keys are always numbers, it is still a key value pairs 
          // 0:Rusty, 1:Lucky, 2:bubba
      //ADD to array
        //specify beginning or end | push adds to end
        dogs.push("Wyatt") 
      //UPDATE array
        dogs[1] = "Lucy" // Lucky becomes Lucy
         
         
      //+++++++++++++++++++++++++++++++++++++//
      /* OBJECT */
      //==============//
      const dog = {
        name: "Bubba",
        breed: "Lab",
      };
      //retrieve name
        dog["name"]
        dog.name
        //key = name, value = Bubba
      //ADD to Object
        //no beginning or end
        dog['age'] = 6
        dog.age = 6
      //UPDATE object
        dog.breed = "Black Lab" //Breed now has value of Black Lab
      ```

    ## OBJECTS in Arrays / Nested Objects and Arrays
      ```js
      //List with each item being it's own object
      const posts = [
        {
          title: "Cats are mediocore",
          author: "Colt",
        }
        {
          title: "Cat are actually awesome",
          author: "Cat Luvr",
        }
      ]

      //Have array withing object within array
      const posts = [
        {
          title: "Cats are mediocore",
          author: "Colt",
          comments: ["Awesome Post", "terrible post"]
        }
        {
          title: "Cat are actually awesome",
          author: "Cat Luvr",
          comments: ["<3", "go to hell I hate you"]
        }
      ]
      //post.length //2
      //posts[0] //gives first object
      //post[0].title //cats are mediocre    
      //posts[1].comments[1] //go to hell i hate you
      ```

    ## JS METHODS | SEE CORRESPONDING FOLDER IN THIS DIRECTORY
      - add functions as properties (called methods instead of property)

      - METHOD: FUNCTION that is a PROPERTY instead of an OBJECT

      - console.log: console = object | log = method

    1. Adding methods to an object
      ```js
      const obj = {
        name: "Chuck",
        age: 45,
        isCool: false,
        friends: ["bob", "tina"],
        add: function(x,y){
          return x = y;
        }
      }

      //to call add function
      obj.add(10,5) 
      15
      ```
      - why put method in object?
          - helps keep code organized so you can group things logically together 
          - prevent namespace collisions
        

    2. Namespacing
      - have function speak() under both dog object and cat object so you can call both and they will be different instead of overriding speak for each outside of object
      - i.e catSpace.speak = "Meow"
      - i.e. dogSpace.speak = "Woof"

      - i.e. delete for users, comments, posts (users.delete, comments.delete, posts.delete)


    3. The Keyword _this_

        - Underscore.Js | Library (_reduce, etc)
            - everything grouped inside of an underscore object

        ```js

        const comments = {};

        comments.data = ["Good Job!", "Bye", "Lame..."]

        //define method called print

        //this is a function not method becuase it is defined/exists outside of comments object
        //up to this point we have been defining our functions separtely in the GLOBAL WINDOW namespace
        function print(arr){
          arr.forEach(function(el){
            console.log(el);
          })
        }
        //to run
        pring(comments.data)

        comments.print = function print(){
          //this refers to the OBJECT comments
          this.data.forEach(function(el){
            console.log(el);
          });


        ```

**We can take some data, put it inside an object and use the keyword _this_ to access the data we predefined**