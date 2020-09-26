/*
$('button').on('click', function(){
  $('div').fadeOut(1000, function(){
    console.log("Fade Completed!");
    //more common to remove elements when completed becuase fade out does not remove the elements just hides them from display
    $(this).remove(); //use this to remove the elements
  });
});
*/

/*
//change display to none in style for div in html
$('button').on('click', function(){
  $('div').fadeIn(1000, function(){
    console.log("Fade In Completed!");
  });
});
*/

$('#fade').on('click', function(){
  $('div').fadeToggle(500, function(){
    console.log("Fade Completed!");
  });
});

$('#slide').on('click', function(){
  $('div').slideToggle(500, function(){
    console.log("Slide Completed!");
  });
});



