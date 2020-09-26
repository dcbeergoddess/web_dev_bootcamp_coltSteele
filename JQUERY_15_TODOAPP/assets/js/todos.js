//Check Off Specific Todos by Clicking | Turn Gray w/ Strikethrough | REFACTORED
//Need to use "ul" becasue code is listening in on at ul
//when an li is clicked inside an ul
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
})

//Click on X to delete todo
//Don't trigger events on parent elements
    //pass arugment into callback function | most common to use event or e
    //e.stopPropagation()
    //need to effect enclosing element in remove/fadeOut/etc | use: .parent()
    //Refactor to fire on ul and then span so new todos are effected
$('ul').on('click', 'span', function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove(); //not same as $(this) in line 12 // we are referring to the li here
  })
  e.stopPropagation();
})

//ADD EVENT LISTENER to text input that fires when we hit the enter key
//need events object again "e"
//12 for enter key
$('input[type="text"]').keypress(function(e){
  if(e.which === 13){
    //grabbing new todo text from input
    const todoText = $(this).val();
    //clear todo input field
    $(this).val("")
    //create a new li and add to ul: append()
    $("ul").append("<li><span>X</span> " + todoText +"</li>")
  }
})


/*==================== REFACTORED USING CLASS COMPLETED LINES 1-6==============================
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