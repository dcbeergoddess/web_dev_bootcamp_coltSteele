//First Example on First Li only
/*=====================================
const firstLi = document.querySelector("li")

//change to green with "mouseover"
firstLi.addEventListener("mouseover", function(){
  firstLi.style.color = "green";
})

//change back to black with "mouseout"
firstLi.addEventListener("mouseout", function(){
  firstLi.style.color = "black"
})
=============================================*/

//Second Example Change ALL Li's
/*============================================
const lis = document.querySelectorAll("li")

//need for loop
for(let i = 0; i < lis.length; i++){
  lis[i].addEventListener("mouseover", function(){
    this.style.color = "green";
  })
  lis[i].addEventListener("mouseout", function(){
    this.style.color = "black";
  })
  //click to mark done
  lis[i].addEventListener("click", function(){
    this.classList.toggle("done")
  })
}
===============================================*/

//REFACTOR to change color using class instead of manual
//create class .selected in css file
//BETTER PRACTICE TO USE CLASSES

const lis = document.querySelectorAll("li")

for(let i = 0; i < lis.length; i++){
  lis[i].addEventListener("mouseover", function(){
    this.classList.add("selected");
  })
  lis[i].addEventListener("mouseout", function(){
    this.classList.remove("selected");
  })
  //click to mark done
  lis[i].addEventListener("click", function(){
    this.classList.toggle("done")
  })
}
