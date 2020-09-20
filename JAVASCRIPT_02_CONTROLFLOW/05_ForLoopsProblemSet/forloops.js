//Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19")

for(let i = -10; i < 20; i++){
  console.log(i)
}

//Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40")

for(let i = 10; i <= 40; i+=2) {
  console.log(i);
}

//OR always print out even no matter where you start
console.log("Version2")

for(let i = 10; i <= 40; i+=1) {
  if(i % 2 === 0) {
    console.log(i);
  }
}

//Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333")

for(let i = 301; i <= 333; i+=2) {
  console.log(i)
}

//OR always print out even no matter where you start
console.log("Version 2")

for(let i = 300; i <= 333; i++) {
  if(i % 2 !== 0) {
    console.log(i)
  }
}

//Print all numbers divisble by 5 AND 3 between 5 and 50
console.log("Print all numbers divisble by 5 AND 3 between 5 and 50")

for(let i = 5; i <= 50; i++) {
  if(i % 5 === 0 && i % 3 === 0) {
    console.log(i)
  }
}
