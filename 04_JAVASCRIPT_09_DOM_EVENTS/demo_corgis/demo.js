const h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
  alert("h1 was clicked!");
});

h1.addEventListener("click", () => {
  h1.style.background = "orange";
})

//CAN HAVE MORE THAN ONE LISTENER ON A H1
// BOTH will run everytime you click

//ADD LISTENER TO UL
// document.querySelector("ul").addEventListener("click", () => {
//   console.log("you clicked the ul")
// });

//ATTACH ONE LISTENER TO EACH LI
const lis = document.querySelectorAll("li");
/*
for(let i = 0; i < lis.length; i++){
  lis[i].addEventListener("click", function() {
    //inside a listener, the keyword "this" refers to the item was clicked, hovered, etc on 
    // whatever is selected from the element before .addEventListner (in this case lis[i]) is what "this" is refering to
    //DID NOT WORK WITH A ARROW FUNCTION, HAD TO USE function() 
    this.style.color = "pink";
  });
};
*/

for(let i = 0; i < lis.length; i++){
  lis[i].addEventListener("click", function() { 
    debugger;
    this.style.color = this.style.color === "pink" ? "black" : "pink";
  });
};

//"this" is same as "event.currentTarget" if you pass event as an argument in the anynomous function

