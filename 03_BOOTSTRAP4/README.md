# BOOTSTRAP 4

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />

<!-- JS, Popper.js, and jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
```

- alpha release: first release
- beta release: more polished
- stable release: things should work

## DOCUMENTATION

- slightly different layout
- input group classes changed, prepend vs. addon

## Changes from 3 to 4

- Migration to v4 (documents all the changes)

  - includes summary
  - classnames

- Grid System built on Flexbox - system for laying out your webpage - bootstrap built on top of
- px to rem
- Global font-size 16px (rem is based of this)

- 5 screen sizes vs 4 in the gridy system

- dozens of new UTILITY CLASSES

- CARDS - replaced panels, thumbnails, and wells

- No standard Glyphicons - use Font Awesome

- No pager compnent

- Compnents refactored
  - i.e, .btn-default instead of .btn-secondary

## NOTES FROM COLT

### BOOTSTRAP COLORS

- contextual colors classes
  - danger, warning, info, primary, success
  - text, alerts
  - default values
- THEMES

- UTILITIES - COLORS (can get classes for colors)

  - text-light
  - text-primary
  - etc.

- Background classes
  - bg-primary

### BOOTSTRAP TYPOGRAPHY

- \_utilities.scss (more advanced to change)

- .page-header removed - have utilities to add border, padding, margin utilities

- .display-1 (to 4, slightly more opinionated hading styles)

  - based off rem

- blockquotes
  - classes in addition to blockquote tag
  - citations in footers for referencing stuff

### FONT UNITS

- PX to REM
  - REM - Relative EM
  - Top Level HTML in Bootstrap 16px (element.style)
    1 rem = 16px x 1

### UTILITY CLASSES

- for common CSS property value-pairs and margin/padding pacing shorcuts
- BORDERS
  - add borders using classes, or subtract borders
  - change color using classes
  - border radius, rounded, etc.

#### SPACING

```
Notation
Spacing utilities that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0 and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format {property}{sides}-{size} for xs and {property}{sides}-{breakpoint}-{size} for sm, md, lg, and xl.

Where property is one of:

m - for classes that set margin
p - for classes that set padding
Where sides is one of:

t - for classes that set margin-top or padding-top
b - for classes that set margin-bottom or padding-bottom
l - for classes that set margin-left or padding-left
r - for classes that set margin-right or padding-right
x - for classes that set both *-left and *-right
y - for classes that set both *-top and *-bottom
blank - for classes that set a margin or padding on all 4 sides of the element
Where size is one of:

0 - for classes that eliminate the margin or padding by setting it to 0
1 - (by default) for classes that set the margin or padding to $spacer * .25
2 - (by default) for classes that set the margin or padding to $spacer * .5
3 - (by default) for classes that set the margin or padding to $spacer
4 - (by default) for classes that set the margin or padding to $spacer * 1.5
5 - (by default) for classes that set the margin or padding to $spacer * 3
auto - for classes that set the margin to auto
(You can add more sizes by adding entries to the $spacers Sass map variable.
```

    - m, p
    - which side, t,b,r,l,x(left&right),y(top&botom)
    - 0 - least/none amount 5-most, different levels based of REMs
      0 = remove,none
      3 = 1rem
      5 = 3rem

### Breakpoints | Responsive

- Layout - Responsive Breakpoints

```css
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

```
``` html
    <div class="container text-center">
        <h1 class="display-3">Breakpoints</h1>
        <button class="btn btn-warning p-sm-5 p-md-0 p-lg-5 p-xl-0">BUTTON</button>
        <button class="btn btn-danger p-0 p-sm-2 p-md-3 p-lg-4 p-xl-5">BUTTON</button>
        <button class="btn btn-success p-0 pl-sm-5 pt-md-5 pr-lg-5 pb-xl-5">BUTTON</button>
        
        <h1>Margin Example</h1>
        <button class="btn btn-primary p-4 mx-0 mx-sm-2 mx-md-3 mx-lg-4 mx-xl-5">Hi</button>
        <button class="btn btn-primary p-4 mx-0 mx-sm-2 mx-md-3 mx-lg-4 mx-xl-5">Hi</button>
        <button class="btn btn-primary p-4 mx-0 mx-sm-2 mx-md-3 mx-lg-4 mx-xl-5">Hi</button>
        <button class="btn btn-primary p-4 mx-0 mx-sm-2 mx-md-3 mx-lg-4 mx-xl-5">Hi</button>
    </div>
```
### BOOTSTRAP 4 NAVBAR

- More control where the breakpoint for the collapse happens
  - .navbar-expand
- entirely rewritten in flexbox
- navbar-light or navbar-dark
- don't have to override as much
- must set background
- toggler
- no longer margin bottom added or border-radius

### DISPLAY UTILITY
- Responsive utilities
  - hidden and visiblit utilites no longer
  - using d instead

``` css
Notation
Display utility classes that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0; and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

As such, the classes are named using the format:

.d-{value} for xs
.d-{breakpoint}-{value} for sm, md, lg, and xl.
Where value is one of:

none
inline
inline-block
block
table
table-cell
table-row
flex
inline-flex
The display values can be altered by changing the $displays variable and recompiling the SCSS.

The media queries affect screen widths with the given breakpoint or larger. For example, .d-lg-none sets display: none; on both lg and xl screens.
```

### FLEXBOX

- Exists outside of Bootstrap but we are going to be using it inside of Bootstrap
- Grid System in Bootstrap 4 moved to flexbox

- a Model for positioning content within a box 

- You don't have to take advantage of it
- FLEX UTILITIES IN BOOTSTRAP
  - Includes CSS properties to move items around

``` html
<div class="d-flex p-2 bd-highlight">I'm a flexbox container!</div>

```
- Make Container a flexable box | d-flex

**TWO DIRECTIONS**

- by deafualt main axis of content is from left to right
  - start of our flexbox is on left side the end is on the right
- crossaxis | CROSS DIRECTION | from top to bottom
  - start of cross-axis is at top and the end of the bottom

1. JUSTIFY CONTENT | MAIN AXIS | DEFAULT LEFT-->RIGHT
- justify-content-start (DEFAULT) - everything starts at the left in the container

- justify-content-end - move everthing to left
- justify-content-center - move everything in container to the center
- justify-content-between - space between items
- justify-content-around - space between end of container and items

- can specify for sm, md, lg, xl

2. ALIGN ITEMS | CROSS AXIS | DEFAULT TOP-->BOTTOM

- align-items-stretch (DEFAULT) - takes up all the space
- align-items-start - refer to CROSSAXIS (TOP OF CONTAINER), move to top
- align-items-center - move to center along cross axis
- align-tems-end - bottom of container


3. DIRECTION
  - default direction
    - left to right | MAIN AXIS
    - top to bottom | CROSS AXIS

  - flex-row-reverse - right to left - content main axis content-start at the right
  - flex-coloumn - items stack vertically, working from top to bottom as MAIN AXIS and CROSS AXIS is now left to right
  - flex-row is DEFAULT
  - flex-coloumn-reverse - MAIN AXIS = BOTTOM to TOP

  - align-self : align one item

4. RESPONSIVE utilities
  - d-flex : default row going accross
  - change to column at small size | there is no xs | flex-column flex-md-row
    - must declare xs as main css class and override

justify-content-between (take any extra space a divide it between items)

### FLEXBOX AND NAVS

```html

CHANGES

Navs
Rewrote component with flexbox.
Dropped nearly all > selectors for simpler styling via un-nested classes.
Instead of HTML-specific selectors like .nav > li > a, we use separate classes for .navs, .nav-items, and .nav-links. This makes your HTML more flexible while bringing along increased extensibility.
Navbar
The navbar has been entirely rewritten in flexbox with improved support for alignment, responsiveness, and customization.

Responsive navbar behaviors are now applied to the .navbar class via the required .navbar-expand-{breakpoint} where you choose where to collapse the navbar. Previously this was a Less variable modification and required recompiling.
.navbar-default is now .navbar-light, though .navbar-dark remains the same. One of these is required on each navbar. However, these classes no longer set background-colors; instead they essentially only affect color.
Navbars now require a background declaration of some kind. Choose from our background utilities (.bg-*) or set your own with the light/inverse classes above for mad customization.
Given flexbox styles, navbars can now use flexbox utilities for easy alignment options.
.navbar-toggle is now .navbar-toggler and has different styles and inner markup (no more three <span>s).
Dropped the .navbar-form class entirely. It’s no longer necessary; instead, just use .form-inline and apply margin utilities as necessary.
Navbars no longer include margin-bottom or border-radius by default. Use utilities as necessary.
All examples featuring navbars have been updated to include new markup.
```

- Use flex utilities to move items around

- Display is automatically set to FLEX

- by default everything in FLEX starts a ROW (MAIN AXIS left to right)

- nav class = flexbox enabled
  - justify content around

- vertical nav
  - flex-column


### RESPONSIVE GRID

``` html
CHANGES
Grid system
- Added a new 576px grid breakpoint as sm, meaning there are now five total tiers (xs, sm, md, lg, and xl).
- Renamed the responsive grid modifier classes from .col-{breakpoint}-{modifier}-{size} to .{modifier}-{breakpoint}-{size} for simpler grid classes.
- Dropped push and pull modifier classes for the new flexbox-powered order classes. For example, instead of .col-8.push-4 and .col-4.pull-8, you’d use .col-8.order-2 and .col-4.order-1.
- Added flexbox utility classes for grid system and components.

```

- SIMILIAR TO BOOTSTRAP 3
  - changed pixel size on breakpoint for sm 576px
  - there is no xs class as well, add in class and apply details for new sizes

- GRID SYSTEM - DOCUMENTATION IN BOOTSTRAP 4
  - 

### CARDS

- LOTS AND LOTS you can do with cards
- replaced, thumbnails, wells, etc.
- can add headers and footers

### GRID ALIGNMENT
- WHEN USE GRID
- make container of sorts
  - make row
  - make col


IMG-FLUID
- makes height 100% abnd height auto

ASSIGN ORDER IN BOOTSTRAP
- order-(GIVE IT A NUMBER)
- order-2 (goes second)
- order-md-1 (difine order at different sizes)
  

