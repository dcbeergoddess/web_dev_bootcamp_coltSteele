//NEED TO PUT script tag for this file before the body in order for code to run and after the jQuery CDN
//CAN CHECK USING THIS:
if(jQuery){
  console.log("jQuery Loaded!")
} else {
  console.log("No jQuery :)")
}

//SELECT all DIVs and give them a purple background
$('div').css("background", "purple");

//SELECT the DIVs with class "HIGHLIGHT" and make them 200px wide
$('.highlight').css('width', '200px');
//if only want divs with that class $('div.highlight')

//SELECT the DIV with id 'THRID' and give it an orange border
$('#third').css("border", "2px solid orange");

//BONUS: SELECT only the FIRST DIV and change its font color to pink
$('div').first().css("color", "pink");

//COLT's syntax
$('div:first-of-type').css("color", "pink")
//also works but slightly slower... THIS IS NOT SUPPORTED ANYMORE!!
$('div:first').css("color", "pink")