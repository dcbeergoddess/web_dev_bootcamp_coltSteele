//***printReverse()
    //define function that prints reverse, takes a single arugment
    //forEach is not ideal here | use for loop 
    //instead of starting at 0, start at end of array (length is always one greater than the geeatest index) | while i is greater than or equal to 0 | then i--
function printReverse(arr){
  for(let i = arr.length - 1; i >= 0; i--){
    console.log(arr[i])
  }
}

printReverse([3,6,2,5]);

//***isUniform()
  //takes array as argument
  //returns true if all elemnts are exaclty the same

function isUniform(arr){
  //create varialbe for first item in arr index
  let first = arr[0];
  //not using forEach | will not stop function after return false because in that specific function
  for(let i = 1; i < arr.length; i++){
    //check to see if equal to first | return false
    if(arr[i] !== first){
      return false
    }
  }
  //if we make it through entire array | return true
  return true
}

//** sumArray() 
  // takes single arr
  //sumes every item inside of it
  //make varialbe to hold total | start it equal to 0

function sumArray(arr){
  let total = 0
  arr.forEach(function(element){
    total += element;
  })
  return total;
}   


//*** max() ***
  //determine max element in an array of numbers
  //variable to keep track of maximum and start it as the first element by default
  //loop through every other item and compare that to current maximum
  //if greater that current maximum
  //return new maximum

function max(arr){
  let max = arr[0]
  //start for loop at 1 because already using array 0 
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max) {
      max = arr[i];
    }
  } 
  return max;
}   