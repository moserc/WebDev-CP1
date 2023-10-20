# Welcome! This is my grocery shopping list-maker.<br>
Instructions for using this list-maker:
1. Download the CP2 file
2. Open index.html in your preferred browser
3. Choose a desired category from the dropdown menu and specify your item
4. Press the 'Add item' button
5. Repeat steps 3-4 until you are satisfied with your list
6. Double-click any item to remove it, or press the 'Clear All' button to clear the entire list
7. Print the page from your browser to bring up save/print options

# Creative Project 2 Project Specification
## External Requirements
* Your project must include the following three files at a minimum:
  * `index.html` - main page of your website
  * `styles.css` - file to style your `.html` file
  * `index.js` - containing your JavaScript code
* Your website must contain at least one HTML page linked to `index.js` to respond to page events as we've discussed in class. It must respond to a page UI event (e.g. changes to a dropdown option or a button click, etc.) or a
     mouse or keyboard event (refer to **Keyboard Events** and **Mouse Events** from [here](https://developer.mozilla.org/en-US/docs/Web/Events)). If you would like to explore an event we don't cover in class on your project but don't know where to get started, feel free to ask.
* At least one of your event handler functions should change the document (DOM) in some way using `element.appendChild()`, `element.removeChild()`, or `element.replaceChild()`
* Event handler functions should be non-trivial, meaning it must be possible they change the page or program "state" in response to the event (i.e. a `console.log`, `alert` statement or unused variable assignment is trivial)
    * There are many different ways JS can be used to respond work with the page. If you are unsure about this requirement for your Creative Project, ask!
* Modify a `classList` of an element (using one of `add`/`remove`/`toggle`) using class that is defined in a linked CSS file.
* You should implement _at minimum_ one non-trivial, named function in your `.js` code. All code in `index.js` must be your own work (you may use the `id`, `qs`, and `qsa` functions shown in lecture. These helper functions do not count as the one named function).
* Make sure to test your webpage UI so that it works properly when a user interacts with page elements - you aren't expected to handle _all_ possible error cases, but part of your grade will come from being able to respond to an user event without an error.
* Tip: You can find a list of some different event types your page can listen for [here](https://developer.mozilla.org/en-US/docs/Web/Events) (not comprehensive).

## Internal Requirements
* Your HTML, CSS, and JavaScript should demonstrate good code quality as demonstrated in class. Part of your grade will come from using consistent indentation, proper naming conventions, curly brace locations, etc. Lecture/section examples
demonstrate JS naming/whitespace conventions in this course.
* When adding interactivity to your website, you should handle any events (like a mouse event, keyboard event, timer, etc.)
  by responding them using a JavaScript function(s) in your `.js` file. You should not have any JavaScript code in your HTML and you should not have any HTML tags as strings in your JavaScript code (e.g. `el.innerHTML = "<p>Foo</p>";`).
* Your `index.js` file should be linked to your `index.html` or other `.html` files using
   `<script src="...">` in the HTML `<head>`.
* Links to your `.html`,  `.css` and `.js` files should be **relative links**, not absolute.
* Minimize styling in JS (e.g. changing the `.style` property of elements) - prefer adding/removing classes to DOM elements instead, and
  style the classes in your CSS. Remember that there is an exception when dynamically generating values for styles or positions that are not reasonably factored out in CSS.
* Any `.js` code you use must use the module-global pattern (recall the module-global template) and `"use strict";`.
* Your page should have a `window.addEventListener("load", functionName)` as shown in lecture (use an appropriate `functionName`).
* Decompose your JS by writing smaller, more generic functions that complete one task rather than a few larger "do-everything" functions.
* Localize your variables as much as possible. You should not use any global variables (outside the module pattern) for reference.
* Only use module-global variables whenever absolutely necessary.
* Use `const` with `UPPER_CASED` naming conventions (instead of `let`) for program constants (e.g. a file path to your images if you are working with many images in your JS).
* For full credit, all HTML, CSS and JS files must be well-formed.
* If you want to explore other JS features beyond what we've taught in class, you must cite what resources you used to learn them in order to be eligible for credit.
* **All file names, links and extensions in your project must be lowercased without spaces** (e.g. `img/puppy.jpg` but not `img/puppy.JPG` or `img/Puppy.jpg`). This is enforced to avoid broken links commonly occurring in CP submissions due to case-insensitivity of file names on Windows machines. In general, it is also just good practice for file/directory naming.