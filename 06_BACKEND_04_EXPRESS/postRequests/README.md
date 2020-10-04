# POST Requests!!!!!!

* Write POST routes, and test them with Postman
  - `app.post()`
  - triggered by post requests
  - set it up in postman to check it

* Use a form to send a post request
  - when send form
  - provide ACTION and METHOD
    - action-where "/addfriend"
    - method-post
    - using "name" to provide "key"

  - `res.redirect` to a `app.get()` route after form data processed in POST route

* Use body parser to get form data
  - `npm install body-parser --save`
  - and require in
  - tell app to use it `app.use(bodyParser.urlencoded({extended: true}));`
```js
  //req.body is an object that will contain all the data from the request body
  //all form data is in the req.body
  //i.e. newFriend=bob = undefined if don't have body parser
  //express does not create a req.body out of the box
  //need to tell it to take body and turn it into an object for us
```
  - anytime we have a form that a user enters data into that we want to extract the data from on the server side we need to use **BODY-PARSER**