# Rendering HTML and Templates

* use `res.render()` to render HTML(from an EJS file)
  - send back contents of a file
  - templates exist in views directory

* Explain what EJS is and why we use it
  - embedded javascript
  - enables us to have dynamic templates
  - `<%= %>`: EJS BRACKETS, treated as javascript code first

* Pass variables to EJS templates
  - pass data/variables to a template into res.render as an js object {thing: thingVar} key: property
  - Dynamic Pages

## EJS Control Flow

* Show examples of control flow in EJS templates
  - template with collection of posts in soccor reddit for example
    - loop through and for each post we make one item
    ```js
    //Loop through all posts
      //make an entry div
        //title
        //tagline
        //...
    ```

* Write if statements in an EJS file
  ```js
  //conditionals for if this link is twitter.com show twitter
  //if video: show vides
  //if match thread: show soccor ball
  ```

  * `<%= %>`: EJS brackets with equal sign will print to html 
  * `<% %>`: adding logic, we don't want it added to html, don't want it to display (i.e. control flow, if statements, loops)

* Write loops on EJS file

```html
<!-- loop through using for loop -->
<% for(let i = 0; i < postsArr.length; i++){ %>
  <li>
    <%= postsArr[i].title %> - <strong><%= postsArr[i].author %></strong>
  </li>
<% } %>
```

```html
<!-- SAME for forEach or while loop, forEach more common, gives ability to name it post rather than using [i] notation -->

<% postsArr.forEach((post) => { %>
  <li>
    <%= post.title %> - <strong><%= post.author %></strong>
  </li>
<% }) %>
```

## STYLES AND PARTIALS

* Show how to properly include public assets
  - create public directory and add style shee
  - tell express to server the public directory

* Properly configure our app to use EJS
  - tell express all our templates will be EJS 

* use partials to DRY up our code
  - use templates that all other templates can use for html/stylesheets you want accross all pages
  - make Directory called partials or layout

* Including PARTIALS in your EJS views
  - again don't need ejs because you told express to look for ejs files as templates
  - EJS has recently been updated to v3.0.1 and now uses the following syntax:
      * `<%- include("partials/header") %>`
      * `<%- include("partials/footer") %>`




