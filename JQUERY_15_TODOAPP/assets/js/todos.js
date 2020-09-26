//Check Off Specific Todos by Clicking | Turn Gray w/ Strickthrough
$("li").click(function(){
  $(this).toggleClass("completed");
})

/*==================== REFACTORED USING CLASSES ABOVE ==============================
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