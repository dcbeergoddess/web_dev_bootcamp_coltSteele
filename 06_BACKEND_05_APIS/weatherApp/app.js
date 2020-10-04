const axios = require('axios');
const dotenv = require('dotenv').config()

axios.get("https://api.openweathermap.org/data/2.5/weather?q=honolulu&appid=" + process.env.API_KEY)
  .then((res) => {
    // console.log(res.data)
    console.log(res.data.sys.sunset)
    const unix = res.data.sys.sunset
    const date = new Date(unix * 1000);
    const sunsetTime = date.toLocaleTimeString();
    console.log(sunsetTime)
  })
  .catch((error) => {
    console.log(error)
  });