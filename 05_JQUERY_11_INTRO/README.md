# jQuery Intro

[Find Latest CDN SRC](https://cdnjs.com/libraries/jquery)

```html
<!-- Including jQuery CDN -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- before <body> ends -->
  <!-- jQuery CDN -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <!-- Bootstrap JavaScript CDN -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

  <!-- From REACT OFC PROJECT/BEFORE END OF BODY -->
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```


1. What is jQuery?
  - DOM Manipulation Library
  - a fast, small, and feature rich JavaScript library
  - makes things like HTML document traversal and manipulation, even handling, animation, and Ajax much simpler with and easy-to-use API that works across a multitude of browsers
  - With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript
  - [DOCUMENATATION AND MORE ON jQUERY](https://jquery.com/)
  - library: code that someone else wrote that we can use within our project
  - comes with methods to;
    * Select Elements
    * Manipulate Elements
    * Create Elements
    * Add Event Listeners
    * Animate Elements
    * Add Effects
    * Make HTTP Request(AJAX)


 2. Why use jQuery?
    - [YOU MIGHT NOT NEED JQUERY](http://youmightnotneedjquery.com/)
      * shows common things you can do with/without jQuery
    - Debate in developer community about using jQuery

    - WHY USE
      * Fixes "broken" DOM API (original reason)
      * Brevity and Clarity
      * Ease of use
      * Cross-Browser Support
      * AJAX
      * Lot's of people use jQuery! (strong community and support/resources)

    - WHY NOT
      * DOM API is no longer "broken"
      * It doesn't do anything you can't do on your own
      * It's and unnecessary dependency
      * Performance
      * Lot's of people are moving awaay from jQuery

     - Vanilla JavaScript/Plain JS: writing javascript without jQuery

## Including jQuery
- CDN or:
- download and create _lib_ folder in project and link to it

### QUICK PREVIEW

```js
// When a user clicks a button with the id 'trigger'
$('#trigger').click(function(){
  //change the body's background to yellow
  $('body').css("background", "yello");
  //fade out all img's over 3 seconds
  $('img').fadeOut(3000, function(){
    //remove imgs from page when fadeOut is done
    $(this).remove();
  });
});
```





  



