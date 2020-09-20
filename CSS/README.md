# INTRO TO CSS

## CSS | Cascading Style Sheets

- The "adjectives"

COLE  
- CSS Zen Garden

## The General Rule

- Every line of css will follow
- select html element (all a tags, h1, etc)
- apply styles inside curly braces
- follow key value pair format

```css 

selector {
  propery: value;
  anotherProperty: value;
}

/* make all h1's purple and 56px font */
h1 {
  color: purple;
  font-size: 56px;
}

/* Give all mg's a 3px red border */
img {
  border-color: red;
  border-width: 3px;
}

```

## My First Style Sheet
### Where do we write our CSS
- Can write INLINE html
  - not recommended
  - would have to duplicate
  - change muliple places

``` html

<li style="color: purple:">Playing Guitar</li>
<li syle="color: purple">Crochet</li>

```

- Style Tag
  - allows us to style inside an html document
  - inside the head tag

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Me</title>

  <style type="text/css">
    h1 {
      color: purple;
    }

    li{
      color: orange;
    }

    h1{
      color: blue;
    }
    /* blue would appear instead of purple in this situation */
  </style>
</head>
<body>
  <h1>About Me</h1>

  <h4>My Hobbies:</h4>
  <ul>
    <li>Playing Guitar</li>
    <li>Cooking</li>
    <li>Crochet</li>
  </ul>
</body>
</html>


```  

  
- HTML AND CSS INDEPENDENT 
  - seperate file
  - connect with link tag

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Me</title>
  <link rel="stylesheet" type="text/css" href=",/app.css">
</head>
<body>
  <h1>About Me</h1>

  <h4>My Hobbies:</h4>
  <ul>
    <li>Playing Guitar</li>
    <li>Cooking</li>
    <li>Crochet</li>
  </ul>
</body>
</html>
```

## Colors in CSS

- Designers have a color pallet 
- built in colors in CSS that have names (i.e, gold, cornflowerBlue, etc.)

### Hexadecimal
  - #+ String of 6 hexadecimal numbers (from 0-F)
  - hash symbol = octothorpe
  - does not mix like regular colors
  - color picker

```css

h1 {
  color: #00000;
}

h2 {
  color: #4B0082;
}

```
Base = How many choice you have
3 Digit Number Choices
---
Decimal -- Base 10
0,1,2,3,4,5,6,7,8,9

Largest = 999
Smallest = 001
---
BINARY - Base 2
0,1

Largest = 111 = not the same as one hundred and eleven
---
HEXADECIMAL - Base 16
0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F

Largest = FFF
Smallest = 000

First Two: How much Red
Second Two: How much green
Third Two: How much blue

Does not work like mixing color, based on how light works
#FFFFFF = white
#000000 = black

```css

h1 {
  color: #FF0000;
  color: red;
}

h1 {
  color: #ff8000;
  color: orange;
}

```
---
### RGB

- 3 channels: Red, Green, and Blue. Each ranges from 0-255
- 0,0,0 = black
- 255, 255, 255 = white

```css

h1 {
  color: rgb(o,225,0);
  /* color: green */
}

h2 {
  color: rgb(100, 0, 100);
  /* color: purpleish */
}

h3 {
  color: rgb(11, 99, 150);
  /* color: blueish */
}

```

### RGBA
- Just like RGB, but with alpha (transparency) channel. Ranges from 0.0-1.0

```css

h1 {
  color: rgb(11, 99, 150, 1);
  /* transparency: none, full alpha */

}

h2 {
  color: rgb(11, 99, 150, .6);
  /* transparency: more */

}

h3 {
  color: rgb(11, 99, 150, .2);
  /* transparency: most, barley visible */
  

}

```


## Color and Background
  - "color" property = set text color
  - "background" property = set background color
    - color
    - image (large and high resolution or image that can be repeated seamlessly)
      - no-repeat
      - cover

  - BORDERS - need all three
    - border-width
    - border-color
    - bprder-style
  

## CSS Selectors | The Basics
  - Element
  - ID
  - Class

### Element Selector
  - Select all isntances of a given element
  - I.e., div, h1, p

### ID Selector | Single Out Element | ONE PER PAGE | #
  - Selects an element with a given ID. ONLY ONE PER PAGE
  - Can have multiple IDs on page but only can appear once
  - way to target one individual element
  --------------------------------------------------------
  - add a hook to element using | id="nameHere"
  - refer to it in CSS using octothorpe before as selector | #nameHere 

### CLASS Selecter | Mulitple Elements | OCCUR UNLIMITED | .
  - Selects all elements with a given class 
  - add hook to element using | class="nameHere"  
  - refer to it in CSS using dot/period | .nameHere

### Selectors TO KNOW
  - Star | *
    - Selects all Elements on a page
    - don't use very often

    ``` css
    * {
      border: 1px solid lightgrey;
    }
    ```

  - Descendant Selector
    - use and see all the time
    - take two or more selectors/tag names and chain them together
    - elements nested inside another 

    ```css 
    /* All anchor tags inside an li */
    li a {
      color: red; 
    }
    ```

  - Adjacent Selector
    - select elements that come after another element
    - not nested inside 
    - select sibling on same level

    ``` css
    /* all ul after an h4 */
     h4 + ul {
       border: 4px solid red;
     }
  ```
  - Attribute Selector
    - select elements based off of any attribute
    - all inputs of particular type(i.e. checkboxes, passwords, etc.), all images of particluar src, all anchors that href to google

    ```css

    a[href="http://www.google.com"] {
      background: blue;
    }

    input[type="text"] {
      color: blue;
    }
    ```

  - nth of type
    - takes number and selects nth of a specific element
    - every 5th div, every 2nd li, tenth paragraph on page

    ```css
    /* select final ul in exercise */

    ul:nth-of-type(3) {
      background: purple;
    }

    li:nth-of-type(even) {
      background: green;
    }

    ```
### Specificity and Inheritance
  - INHERITANCE
    - child elements inherit properties of the parent element

  - SPECIFICITY
    - can override inherited styles
    - mulitple styles targeting one element
    - which ever element is more specific that one will win out
    - elements are assigned specififcity by number
    - there is a calculator that will tell us how specific something is
      - KEEGAN SPECIFICITY CALCULATOR

        - ELEMENT SELECTORS and TAGS | not very specific
        - CLASS | much more specific
        - ID | most specific
          ``` css

          /* Type Selectors */

          li {

          }

          li a {

          }

          li + a {

          }

          /* Class, Attribute, and Pseudo-Class Selectors */

          .hello {

          }

          input[type="text"] {

          }

          a:hover {

          }

          input:checked {
            
          }

          /* ID Selectors */

          #hello {

          }
          ```

## Fonts and Text Basics
  - Standard
    - font-family
    - font-size
    - font-weight
    - line-height
    - text-align
    - text-decoration
  
  - CSS Font Stack 
    - www.cssfontstack.com
    - show what machines use for standard fonts

- FONT-SIZE
  - px | pixels unit
  - em
    - relative font sie
    - size is dynamic, applies to parent element in question
    - changes depending on browser
    - set font-size on body to provide standard

- FONT-WEIGHT
  - refers to how bold or lightweight the text is
  - how thick the lines are
  - some fonts will let you us a numeric value
    - ranges from 100-800
    - every hundred number
    - 100 is lightest
    - 800 is heaviest

 - LINE-HEIGHT
  - controls height of given line
  - determined by font itself  
  - 2 (would double/double space)
  - don't usualy do much other than 1.5 or 2) 

- TEXT-ALIGN
  - controls how the text of given element is aligned
  - right | left | center

- TEXT-DECORATION
  - underline effect
  - strikethrough
  - overline
  - none

## Custom Fonts

### Google Fonts
  - 100 fonts online for free
    - search find font
    - decide what weights
    - click on select this style
    - click on embed
    - copy link and put in head element after title tag
    - copy rules and put it inside your 
      - font-family: 'Raleway', sans serif
        - us another sans serif font if raleway not available
      - font-family: 'Indie Flower', cursive
        - use another curisve font if not available

  - personal Font
    - link to your own font file
    - look up in MDN for what file types are supported

## BOX MODEL
  - Padding, Margin, Border and More!
  - Position of Elements

  ### MDN
    - In a document, each element is represented as a rectangular box. 
    - In CSS, each of these rectangular boxes is described using the standard box model. 
    - Each box has 4 edges
      - margin edge
      - border edge
      - padding edge
      - content edge

  ### Properties | Example in box-model folder

    - Content - element
      - width and height
      - when use percentage (bssed off parent element)
        - responsive

    - Padding - space inside border (b/w element and border)
      - one number would effect all for sides
      - i.e. padding-right, etc.
      - padding: 

    - Border 
      - one number effects all sides
      - i.e border-top etc

    - Margin - between border and anything else/outside border
      - looks just like padding
      - margin: top right bottom left
      - margin auto on left or right - responsive













