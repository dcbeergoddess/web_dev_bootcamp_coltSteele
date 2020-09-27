# jQuery Events
**Making things Interactive**

- Equivialent to _.addEventListener_ in Vanilla JS 
- toggle keeps track of STATE

**[jQuery Events Documentation](https://api.jquery.com/category/events/)**

**OBJECTIVES**
  - could use these 3 methods 99% of the time (especailly on())
* click()
* keypress()
* on()

## click()
  - Bind an event handler to the "click" JavaScript event, or trigger that event on an element.

**[jQuery Documention](https://api.jquery.com/click/)**
- quick and easy way to add a click listener to element(s)
```js
//prints when item with id 'submit' is clicked
$('#submit').click(function(){
  console.log('Another click');
});

//alerts when ANY button is clicked 
$('button').click(function(){
  alert('Someone clicked a button');
  //if you want to change button that is clicked use jquery object syntax $(this) to refer to it
  $(this).css("background", "pink");
});

//Get text from button clicked
$("button").click(function(){
  const text = $(this).text();
  console.log("You clicked " + text);
})
```

## keypress()
  - Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.

**[jQuery Documention](https://api.jquery.com/keypress/)**
- quick and easy way to add a keypress listener to element(s)
- fires inbetween keyup and keydown: 
[StackOverFlow Post](https://stackoverflow.com/questions/12827408/whats-the-theory-behind-jquery-keypress-keydown-keyup-black-magic-on-macs)
- _Note that keydown and keyup provide a code indicating which key is pressed, while keypress indicates which character was entered._
- [JavaScript Key Codes](https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes)
```js
//listen for any keypress in any text input
$('input[type="text"]').keypress(function(){
  alert("text input keypress!";)
})

//When user hits enter | pass in argument | contains information about keypress event
//use which from object (use that code that corresponds to enter key "13")
//capture in varialbe event that you pass in as argument to function
$('input[type="text"]').keypress(function(event){
  console.log(event)
  if(event.which === 13){
    alert("you hit enter")
  }
})
```

## on()
  - Attach an event handler function for one or more events to the selected elements.

**[jQuery Documention](https://api.jquery.com/on/)**
- works similiary to _addEventListener_
- lets you specify the type of event to listen for
```js
//prints when item with id "submit" is clicked
//need to specify what type of event and then callback function
$('submit').on('click', function(){
  console.log("Another click");
});

//alerts when ANY button is clicked
$('button').on('click', function(){
  console.log('button clicked');
});

//double click event
$('button').on('dblclick', function(){
  console.log('button double clicked');
});

//drag start event
$('a').on('dragstart', function(){
  console.log("drag started");
});

//keypress event
$('input[type="text"]').on('keypress', function(){
  alert('key press in an input');
});

//using this so it only effect element clicked
$('h1').on(click, function(){
  $(this).css("color", "purple")
})

//hover over: but very easy with CSS
$('button').on('mouseenter', function(){
  conosle.log("mouse enter");
  $(this).css("font-weight", "bold");
})

$('button').on('mouseleave', function(){
  conosle.log("mouse enter");
  $(this).css("font-weight", "normal");
})
```

### NOTE ABOUT _click()_ vs _on('click')_
- both will get the job done
- ONE KEY DIFFERENCE:
  * _click_ only add listeners for existing elemetns
  * _on()_ will add listeners for all potential future elements

## jQuery Effects

**[jQuery Documentation Effects](https://api.jquery.com/category/effects/)**

  * FADE EFFECTS | fadeOut(), fadeIn(), fadeToggle
  **fadeOut**
  ```js
    $('button').on('click', function(){
      $('div').fadeOut(1000);//can specify how long it takes
      console.log("Fade Completed")//this will run even though doe above has not finished
    });
    //ALSO NOTE THAT IT does not remove them from the page it is just hiding them

    //To make "console.log("Fade Completed")" only run after fade has been completed
        $('button').on('click', function(){
          $('div').fadeOut(1000, function(){
            console.log("Fade Completed")
          })
        });
  ```
  **fadeIn()**
  ```js
  //change display to none in style for div 
    $('button').on('click', function(){
      $('div').fadeIn(1000, function(){
        console.log("Fade In Completed!");
      });
    });
  ```

  **fadeToggle**
  ```js
  //Will fade in or out depeding on if element is currently showing or not
    $('button').on('click', function(){
      $('div').fadeToggle(500, function(){
        console.log("Fade Completed!");
      });
    });
  ```  

* Slide Effects | slideDown(), slideUp, slideToggle
**slideDown()**
- animates height of element
```js
//elements are set to display none
//elements appear top to bottom
    $('button').on('click', function(){
      $('div').slideDown();
    });
```

**slideUp**
```js
//elements disappear from display starting from bottom to top
    $('button').on('click', function(){
      $('div').slideDown();
    });
```

**slideToggle**
```js
    $('button').on('click', function(){
      $('div').slideToggle();
    });
  //can also give duration for slide and add callback function
    $('button').on('click', function(){
      $('div').slideToggle(500, function(){
      console.log("Fade Completed!");
      });
    });
```

