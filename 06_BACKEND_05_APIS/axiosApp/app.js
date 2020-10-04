const express = require('express');
const app = express();
const axios = require('axios');

const PORT = 8080;

//API KEY //METHOD CHAINING
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


app.listen(PORT, () => {
  console.log("APP listening on http://localhost:" + PORT);
});



