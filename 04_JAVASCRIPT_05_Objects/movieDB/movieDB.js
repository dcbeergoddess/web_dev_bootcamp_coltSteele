//Create an array of movie Objects
// Title(string), rating(number), hasWatched(boolean)
//Iteraite through arrya and print out something that looks like:

/* 
You have seen "In Bruges" - 5 stars
You have not seen "Frozen" - 4.5 stars
You have seen "Mad Max Fury Road" - 5 stars
You have not seen "Les Miserables" - 3.5 stars
*/

const movies = [
  {
    title: "In Bruges",
    rating: 5,
    hasWatched: true,  
  },
  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: false, 
  },   
  {
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true,  
  },
  {
    title: "In Bruges",
    rating: 3.5,
    hasWatched: false,  
  }
]

movies.forEach(function(movie){
  let result = "You have ";
  //slowly build result string
  if(movie.hasWatched) {
    //do not make this movie.hasWatched = true
    result += "watched "
  } else { 
    result += "not seen "
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result)
})


//ANOTHER WAY

function buildString(movie){
  let result = "You have ";
  //slowly build result string
  if(movie.hasWatched) {
    //do not make this movie.hasWatched = true
    result += "watched "
  } else { 
    result += "not seen "
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}

movies.forEach(function(movie){
  console.log(buildString(movie));
})
