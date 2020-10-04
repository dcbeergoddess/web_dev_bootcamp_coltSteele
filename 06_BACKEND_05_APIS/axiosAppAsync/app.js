const express = require('express');
const app = express();
const axios = require('axios');

const PORT = 8080;

//ASYNC AWAIT
// MAKE A TRY and CATCH 
//SAVE AWAIT AXIOS AS VARIABLE

//normally running code inside route
//make route async

app.get('/', async (req, res, next) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
  } catch(err) {
    console.log(err);
  }  
})


//FOR EXAMPLE: Immediatily envocking function expression: IFFE (async function { code goes in here })()
(async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    console.log(response.data)
  } catch(err) {
    console.log(err);
  } 
})() //this allows for async function to be called right away: IFFE


app.listen(PORT, () => {
  console.log("APP listening on http://localhost:" + PORT);
});



