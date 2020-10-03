# Our First Express App

* Review an existing app (DogDemo)
  - The ROUTES
    - the code responsible for listening and reciveing the http request and then deciding what to send back
    - code listening for post request
      - create dogs
      - etc
    - code listening for get request
      - code to find all dogs and render dog page
  - START SERVER
    - setting up port


* Review HTTP response/request lifecycle
  - when you got to url you send an http request(GET, POST, etc) to server potentially along with some data and server responds back according to its code
  - use express to do the same

* Create our own simple Express app!

## I PART ONE
  - ROUTES
    - how we listen for particular request
    - and run some code based on particular request
  
  - req and res
    - request and response: BOTH ARE OBJECTS
      * req: contains all the information about the request that was made that triggered this route
      * res: contains all the information about what we are going to respond with

2. PART TWO
  * package.json
    - docs.nodejitsu.com
    - JavaScript Object Notation
      - data type
      - way of formatting text in a file to represent structure
    - contains all the meta data about this particualr application or package express
    - dependencies are all the packages express relies on
    - HOLDS META DATA relevant to a specific project
    - RECIPE for the ingredients needed

  * node_modules
    - when sharing projects don't need this baggage
    - share dependencies and then user can install
    - like the ingredients in a recipe

  * --save
    - take the packge name and version and automatically save it into our package.json
    - otherwise it is in package-lock.json and no regualr package.json file is created unless you npm init
  
  * npm init
    - create a new package.json file
  
  * NODEMON
    - `npm install  --save-dev nodemon`
    - `npx nodemon app.js`

## II PART TWO
  * MORE ROUTING!
    1. Show the `*` route matcher
      - splat/star route matching 
      - want a catch all to responde to every other route other than what we have created
      ```js
      app.get("*", function(req, res){
        res.send(); //create catch all error page
      })
      ```

    2. Write routes containg route parameters
      - route parameters
      - i.e. reddit
        - thousands and thousands of subreddits
          - "/r/soccer"
          - Not write as DRY code
      - MAKE IT INTO A PATTERN/VARIABLE `:`
        - `/r/:subredditName`
        - even more for `r/:subredditName/comments/:id/:title/`


        
      

    3. Discuss route order
      - FIRST route that matches will be the route that is run
      - If catch all route was placed first, every route would go there












