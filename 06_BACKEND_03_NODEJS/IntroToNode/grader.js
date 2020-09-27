//NODE EXERCISE 2
//AVERAGE GRADE

//create a new file "grader.js"

//In the file define a new function named "average"
//It should take a single paramater: an array of text scores(allnumbers)
//It should return the average score in teha rray, rounded to the nearest whole number
function average(scores) {
  //add all scores together
  let total = 0
  scores.forEach(function(score){
    total += score
  });
  //divide by total number of scores
  let avg = total/scores.length
  //round
  return Math.round(avg);
}

const scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

const scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68

