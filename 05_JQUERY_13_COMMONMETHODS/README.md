# Common jQuery Methods PART 1

- GETTER and SETTER

**OBJECTIVES**
* val()
* text()
* attr()
* html()
* addClass()
* removeClass()
* toggleClass()

## text()

- [jQuery API Documentation](https://api.jquery.com/text/)
- Get the combined text contents of each element in the set of matched elements, including their descendants, 
- or set the text contents of the matched elements
- jQuery version of .textContent

## html()

- [jQuery API Documentation](https://api.jquery.com/html/)
- Get the HTML contents of the FIRST element in the set of matched elements
- or set the HTML contents of every matched element
- 

## attr()

- [jQuery API Documentation](https://api.jquery.com/attr/)
- Get the value of an attribute for the first element in the set of matched elements
- or set one or more attributes for every matched element

```html
<img id="greatphoto" src="brush-seller.jpg" alt="brush seller">
```
```js
//Setting a simple attribute
$( "#greatphoto" ).attr( "alt", "Beijing Brush Seller" );
//Add an attribute the same way:
$( "#greatphoto" ).attr( "title", "Photo by Kelly Clark" );

//Change/SET muliple attributes with object
$( "#greatphoto" ).attr({
  alt: "Beijing Brush Seller",
  title: "photo by Kelly Clark"
});

```

## val()

- [jQuery API Documentation](https://api.jquery.com/val/)
- Get the current value of the first element in the set of matched elements
- or set the value of every matched element

## addClass()

- [jQuery API Documentation](https://api.jquery.com/addClass/)
- Adds the specified class(es) to each element in the set of matched elements.

## removeClass()

- [jQuery API Documentation](https://api.jquery.com/removeClass/)
- Remove a single class, multiple classes, or all classes from each element in the set of matched elements.

## toggleClass()

- [jQuery API Documentation](https://api.jquery.com/toggleClass/)
- Add or remove one or more classes from each element in the set of matched elements
- depending on either the class's presence or the value of the state argument.