const button = document.querySelector("button");
const paragraph = document.querySelector("p");

//SETUP CLICK LISTENER
button.addEventListener("click", () => {
  paragraph.textContent = "Someone Clicked the Button!"
})