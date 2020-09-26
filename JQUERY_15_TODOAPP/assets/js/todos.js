//Check Off Specific Todos by Clicking | Turn Gray w/ Strikethrough | REFACTORED
$("li").click(function(){
  $(this).toggleClass("completed");
})

//Click on X to delete todo
//Don't trigger events on parent elements
    //pass arugment into callback function | most common to use event or e
    //e.stopPropagation()
    //need to effect enclosing element in remove/fadeOut/etc | use: .parent()
$('span').click(function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove(); //not same as $(this) in line 12 // we are referring to the li here
  })
  e.stopPropagation();
})



/*==================== REFACTORED USING CLASS COMPLETED LINES 1-4==============================
//Check Off Specific Todos by Clicking | Turn Gray w/ Strikethrough
$('li').click(function(){
  //if li is gray
  //need to use rgb as you can see when you console.log($(this).css("color")) it prints rbg for gray when comparing in if statement
  if($(this).css("color") === "rgb(128, 128, 128)"){
    //turn it black
    $(this).css({
      color: "black",
      textDecoration: "none"
    });
  } else {
    //turn it gray
    $(this).css({
      color: "gray",
      textDecoration: "line-through"
    });
  }
});
============================================================================*/ 