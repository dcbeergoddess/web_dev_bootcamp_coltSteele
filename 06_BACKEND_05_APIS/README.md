# INTRO TO APIS
**Connecting with other APPLICATIONS**

* Application Programming Interface
  - API's are interfaces for code/computers to talk to one another
    * For Example: Tinder using data from Facebook to match likes, and other common data
      * code that connects to FACEBOOKs api

  - Connecting to databases on your local computer

* WEB APIs
  - Web interfaces to other applications
  - Generally Communicate via HTTP
    * Twitter API: _give me all tweets that mention "ice cream"_ 
    * Facebook API: _send me the current user's profile picture_
    * Weather API: _what is the weather in Missoula, Montana?_
    * Reddit API: _what is the current top post?_
    * GooglePlaces API: _what gas stations are near the user?_
    * Yelp API: _give me 10 resturants in the zipcode 94110_

* IFTTT - uses APIS
  - [WEBSITE](https://ifttt.com/)

* Sites with API Directories
  - [ProgrammableWeb](https://www.programmableweb.com/)
  - [FUN TESLA API](https://tesla-api.timdorr.com/)

## JSON AND XML

- API sends back data and not structure
- request usually looks something like this | Based on API Documentation
  - **iTunes API:** `https://itunes.apple.com/search?term=beyonce&entity=musicVideo`
    - response: DATA of 50 music video of beyonce

1. **XML**
  * EXTENDED MARKUP LANGUAGE
    - Similar to HTML, but it does not describe presentation or structure
    - encodes KEY VALUE PAIRS (can nest things insdie each other)
      ```xml
      <person>
        <age>11</age>
        <name>Travis</name>
        <city>Los Angeles</city>
      </person>
      ```

2. **JSON**
  * JAVACRIPT OBJECT NOTATION
    - JSON looks exactly like JavaScript objects, but everything is a string
    - need quotes around the keys
    - can easily convert to use in your javascript 
      ```json
      {
        "person": {
          "age": "21",
          "name": "Travis",
          "city": "Los Angeles"
        }
      }
      ```

## AXIOS - MAKE HTTP REQUEST FROM CODE
  - help make http request to APIs
  - Promise based HTTP client for the browser and node.js
  ```js
  //WITH thenable promise
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
      //.then promise get res back from api
      .then((res) => {
        //return everything in "data" object we are looking for
        console.log(res.data);
        console.log(res.data.title)
        console.log(res.data.userId)
      }) 
      .catch((error) => {
        //handle error
        console.log(error)
      })
      .finally(() => {
        console.log("Done")
      });
  ```

  - Can use Async/Await for better structure of code
  - can use try and catch error handling
  ```js
  //Immediatily envocking function expression: IFFE (async function { code goes in here })()
    (async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(response.data)
      } catch(err) {
        console.log(err);
      } 
    })() //this allows for async function to be called right away
  ```

  - USING ASYNC WITHING A Express ROUTE
  ```js
  app.get('/', async (req, res, next) => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    } catch(err) {
      console.log(err);
    }  
  })

  ```


  

  



