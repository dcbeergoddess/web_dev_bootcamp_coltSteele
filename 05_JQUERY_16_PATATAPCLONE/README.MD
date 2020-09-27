# Patatap Clone

[LINK TO GITHUB REPO](https://github.com/dcbeergoddess/patatap_clone)

This project was created in a separate github repository

## NOTES: 
1. **[Paper.js](http://paperjs.org/)**

    -  In the exercise from the following lectures, be sure to include your Paperscript code internally in the HTML, using the script tag. 
    - If you try to include this script as an external .js file, it will break your app due to [Cross Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).
    - If you're using Visual Studio Code and would like syntax highlighting, then see [here](https://www.youtube.com/watch?v=-mHkmAZBkzo).
    - Also, Paper JS will not work with ES6+ syntax, so using let/const, etc. will not work for this exercise.   



2. [Howler.js](https://howlerjs.com/)

    - Howler.js has updated their syntax in the latest version. 
    [Click here](https://github.com/goldfire/howler.js/#quick-start) 
    to read more about it. 

    - See below for an example of the updated syntax (hint: it uses src instead of urls as a key inside of the sound object):
    ```js
    var sound = new Howl({
      src: ['sound.mp3']
    });

    sound.play();
    ```
    - You can also copy all of the updated syntax for the keyData object from 
    [here](https://cdnjs.com/libraries/howler).

    - You'll also need to update your Howler file, see 
    [here](https://cdnjs.com/libraries/howler) 
    for a CDN link to the latest version.


  