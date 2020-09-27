//NODE EXERCISE

//USING COMMAND LINE, create a file echo.js
//Inside the file, write a function named echo that takes 2 arguments, a string and a number
//It should print out the string, number number of times

function echo(str, num){
  for(let i = 1; i <= num; i++){
    console.log(str)
  }
}

echo("Echo!!!", 10); //should print "Echo!!" 10 times
echo("Tater Tots", 3); //should print "Tater Tots" 3 times

