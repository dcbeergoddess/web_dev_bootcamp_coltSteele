//Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19")

let num1 = -10

while(num1 < 20 ) {
  console.log(num1);
  num1++;
}

//Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40")
let num2 = 10 
while(num2 <= 40) {
  console.log(num2);
  num2+=2;
}
//OR always print out even no matter where you start
let num2B = 10 
while(num2B <= 40) {
  if(num2B % 2 === 0) {
    console.log(num2B)
  }
  num2B+=1;
}


//Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333")
let num3 = 301
while(num3 <= 333) {
  console.log(num3);
  num3+=2
}

//OR always print out even no matter where you start
let num3B = 300
while(num3B <= 333) {
  if(num3B % 2 !== 0) {
    console.log(num3B)
  }
  num3B+=1;
}

//Print all numbers divisble by 5 AND 3 between 5 and 50
console.log("Print all numbers divisble by 5 AND 3 between 5 and 50")
let num4 = 5
while(num4 <= 50) {
  if(num4 % 5 === 0 && num4 % 3 === 0) {
    console.log(num4)
  }
  num4++
}