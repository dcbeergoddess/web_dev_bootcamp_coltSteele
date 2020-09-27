# jQuery Selectors

  **OJBECTIVES**
- Select Elements with _$()_
- Use _.css()_ to style elements

## Selecting with jQuery
    ```js
    $("selectorGoesHere")
    ```
  - Selecting with jQuery is very similar to _querySelectorAll_, in that we PROVIDE a CSS style selector and jQuery will RETURN ALL matching elements

 - We **SELECT** and then manipulate
 ```js
  //to select all img tags
  $('img')

  //to select all elements with a class 'sale'
  $('.sale')

  //to select element with id 'bonus'
  $('#bonus')

  //to select all a tags inside of li's
  $('li a')
 ```  

 ## Manipulating Style
 - The .css() method is jQuery's interfact to styling
 ```js
  $(selector).css(propery, value)
 ```
 ```js
  //select elem with id 'special' and give it a border
  $('#special').css('border', '2px solid red');

  //we can also pass in an object with styles | muliple values/key value pairs
  const styles = {
    backgroundColor : 'pink',
    fontWeight: 'bold',
  };

  $('#special').css(styles);
 ```
  - We can style multiple elements at once
```js
  //select all li's and make them yellow
  //with vanilla js you would have to create a for loop to change a collection of elements/ also why it always returns an array in jQuery even if there is only one item in the selector
  $('li').css("color", "yellow");

  //select all elements with class 'big'
  //and give them and orange border
  $('.big').css("border", "1px orange")

  //writing CSS selectors
  //in jQuery line: normal css syntax
  $('a').css('font-size', '10px')
  //using object to create style variable to use | camel case css selectors with "-"
  $('a').css({
    fontSize: "10px"
    border: "3px dashed purple"
    backgroundColor: "rgba(89, 45, 20, 0.5)"
  })
```




