const faker = require('faker');

//DID NOT WORK TO DECLARE as Variables FIRST
//LOOP PRINTED OUT SAME PRODUCT 10x
// let randomProduct = faker.commerce.productName();
// let randomPrice = faker.commerce.price();

console.log("==================")
console.log("WELCOME TO MY SHOP")
console.log("==================")

for(let i = 0; i < 10; i++){
  console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}

// var randomName = faker.name.findName(); // Rowan Nikolaus