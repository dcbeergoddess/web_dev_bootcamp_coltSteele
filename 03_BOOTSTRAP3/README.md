# BOOTSTRAP 3 REVIEW
  - Bootstrap is the most popular HTML, CSS and JS framework for developing resposive, mobile first projects on the web

  - most starred and forked library on Github
      - a single file of CSS and a single file of Javascript
      - include in our own applcation
      - helps us make good looking websites quickly

  - Great Documentation
  - Bootstrap Expo - Examples using bootstrap - Creative Tim

## CDN 
  - Conent Delivery Network

  - BOOTSTRAP 3 LINKS

```html

  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

### BUTTONS
  - Standard Kinds
  - Sizes
  - states 
  - add styling changes on existing btn-danger, etc. SPRAY PAINT

### Jumbotron
    - a lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site


### Forms and Inputs
    - Inline forms
    - inputs supported
    - textareas
    - checkboxes
    - inline checkboxes and radio buttons
    - dropdown menus
    - select
    - FOCUS STATE
    - DISABLED STATE

  - BASIC FORM
    - .form-group (group label and input together)
      - spacing
    - .form-control (rounds corner, not same focus effect)
      - both above help control general styles
  - INLINE FORM
    - .form-inline -  all accross one line

### Nav Bars
  - .navbar-default
    - brand
    - links
    - dropdown
    - elements on either end

    #### Collapse
    - id and data-target must match for collapse to work
    - put items you want to collapse within collaspse class
    - button for hamburger contains several lines of html, it is not an image
    - need jquery for dropdowns to work

    #### FIXED TO TOP
      - 70px Padding-Top on body needed when fixed to top

## The Grid System

  1. The Purpose fo the Grid System
    - Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases. It includes predefined classes for easy layout options, as well as powerful mixins for generating more semantic layouts.

    - Anytime you write a bootstrap grid in needs to be in a container
      - then write div for row size
      - inside of EACH ROW we have 12 UNITS ACCROSS to pick from
        - then define column size

  2. 4 different Sizes/Layouts
    - XS | Phones | <768px
    - SM | Tablets | >=768px
    - MD | Desktops | >=992px
    - LG | Desktops | >=1200px

    - LG will take after MD if you don't specify

  3. Nested Grids
    ``` html
      <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-6 pink">
        <div class="row">
          <div class="col-lg-6 pink">First Half</div>
          <div class="col-lg-6 pink">Other Half</div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-6 pink">TOUR DATE</div>
      <div class="col-lg-3 col-md-3 col-sm-6 pink">TOUR DATE</div>
      <div class="col-lg-3 col-md-3 col-sm-6 pink">
        <div class="row">
          <div class="col-lg-2 orange"></div>
          <div class="col-lg-2 orange"></div>
          <div class="col-lg-2 orange"></div>
          <div class="col-lg-2 orange"></div>
          <div class="col-lg-2 orange"></div>
          <div class="col-lg-2 orange"></div>
        </div>
      </div>
  </div>
  ```
## Gliphcons and FontAwesome
  - treat like fonts for changing color and size
  - specificity for bootstrap classes in navbars
  - inverse (navbar dark colors)

## TEXT-SHADOW

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black; 

/* color | offset-x | offset-y | blur-radius */
text-shadow: #fc0 1px 0 10px; 

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* Use defaults for color and blur-radius */
text-shadow: 5px 10px;

/* Global values */
text-shadow: inherit;
text-shadow: initial;
text-shadow: unset;

/* EXAMPLE w/ shades of gray */
text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
            0px 8px 13px rgba(0,0,0,0.1),
            0px 18px 23px rgba(0,0,0,0.1);
```









  