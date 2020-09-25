//get text()=======================================
console.log($('h1').text());

//set text()
// $('h1').text("New Text!");

//get html()=========================================
console.log($('ul').html());

//set/update html content
console.log($('ul').html('<li>I Hacked your UL!</li><li>Rusint is still adorable</li>'));

//loop through and chnage all li's: 
//$("li").html('<a href="www.google.com">Google.com</a>')

//attr()=============================================
//get original width of image
console.log($('img').css('width'))
//get original src of img using attr()
console.log($('img').attr('src'))
//set new width
$('img').css('width', '300px')
//change img src
$('img:first-of-type').attr('src', 'https://cdn.pixabay.com/photo/2017/07/08/16/24/marten-2484850_1280.jpg' )
$('img').last().attr('src', 'https://cdn.pixabay.com/photo/2017/07/08/16/24/marten-2484850_1280.jpg' )

//get input type
console.log($('input').attr("type"))
//change input type
// $('input').attr("type", "color")

//val()==========================
//get val
console.log($('input').val()); //prints empty string
//SETTER
$('input').val("Rusty")

//clear input: use .val() and pass in empty string
// $('input').val("")

console.log($("select"));
console.log($("select").val());

//CLASSES
// addClass()=================
$('h1').addClass("correct");







