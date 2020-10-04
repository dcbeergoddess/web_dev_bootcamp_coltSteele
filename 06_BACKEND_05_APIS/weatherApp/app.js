const axios = require('axios');

axios.get("https://api.openweathermap.org/data/2.5/weather?q=honolulu&appid=105f3341727436740b10e375a70600be")
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
