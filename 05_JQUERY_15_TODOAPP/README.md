# Todo List App 

- Code Along from Colt Steele's Web Developer Boot Camp
- Using HTML and CSS with jQuery

NOTE: slide animation for trashcan icon done using CSS and not jQuery
```css
/* possible solution */
/* for browser wrap element in container and set "overflow:hidden" on container */
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
```

## OBJECTIVES
- Responsive App
- trashcan slides in when hover
- click to strickthrough
- hit trashcan, todo fades out and disappears

- ADD NEW TODOs
- Button to hide form or view form

## BEHIND THE SCENES Practice
  **jQuery**
  * .on()
  * .keypress()
  * Fades and Slides
  * Selecting
  
  **CSS | BOX MODEL**
  * Margin
  * Padding
  * Float
  * Fonts

## NEW THINGS
  **BETTER FOLDER STRUCTURE**
  **jQuery**
  * .parent()
  * .append()
  * Creating Elements
  * Event Delegation

  **CSS**
  * Font-Awesome
  * [Box-Shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
  * Transition
  * Gradients

## ORDERING CSS FILE

- ORDER by how items appear on page
- ORDER by specficity
