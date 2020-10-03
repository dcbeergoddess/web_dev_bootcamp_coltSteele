# THE FIRST EXPRESS ASSIGNMENT

* Save express as dependency using --save
* import/requre statements for express and set up as variable in order to set up routes
* set up PORT to listen o

* `app.get("/", .....)` | routh path
* `app.get("*", ...)` | catch all

## speak route

1. `app.get("/speak/:animal")` and will `res.send()`
  - need to extract the animal | MAKE VARIABLE 
    - `let animal = req.params.animal`
  - Have VARIABLE that will Store SOUNDS 
  ```js
  //similar to conditional i was trying to do, but sound need to be set to empty string
  let sound = ""
  if(animal === "pig"){
    sound = "oink";
  } else if(animal === "cow"){
    sound = "moo"
  } 

  res.send("The " + animal + " says " + sound);
  ```
  - INSTEAD
    - define a dictionary of animal sound pairings as JS OBJECT
  ```js
    const sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof",
    cat: "I hate people",
    pitbull: "i want to cuddle"
  }
    //the sound now equal sounds of animal 
  let sound = sounds[animal];
  ``` 

2. Repeat ROUTE
  - we know we need the message
  - and the number of times
    * `/repeat/:message/:times`
  - Create loop
  - need to create a result varialbe to build onto since you can only use res.send ONE TIME

