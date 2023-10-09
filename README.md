This repository is my portfolio of projects from the Web Development course of the Bachelor of Science in Computer Science program, Fall Quarter '23. See project details for phase details and specifications.

Instructions for viewing the web pages:
  1. Download and extract the zip file for this repository.
  2. In your file folder, copy the file path for the about.html file.
  3. Open your preferred browser.
  4. Type "file:///" into the address bar.
  5. Paste the file path that was copied in step 2.

# Creative Project 1
## Overview
For the first project, we were tasked to use HTML and CSS to make a simple website with at least two HTML pages linked to one shared CSS file. 

1. 'about.html' was given to us as a template in which we filled in our own content but left the code largely untouched.
2. 'resume.html' was my from-scratch addition.
3. 'styles.css' was given as a minimal template for us to expand on. It originally only had an html ruleset with 5 elements in it.

See the requirements listed below for more info on project specifications.

## External Requirements
* Your project must include the following 3 files (you may choose to include more):
  * A completed `about.html` (do not change this file name) following instructions in the source code. You _may_ add to the HTML in this file if you wish - this structure is included to get you started. However, please do not delete any of the provided html.
  * One other `.html` file (you can choose the filename) that is linked from `about.html` with an `<a>` tag.
  * A `styles.css` file.
* You must link `styles.css` to both `about.html` and your other HTML page to style your website with a consistent look and feel. You may add a second `.css` file to either page to factor out styles that are not shared by both pages (you can add a second CSS file with an additional `<link>` tag in the HTML `<head>`).
If you choose to use a second stylesheet, you should use `styles.css` only for styles that are shared by both HTML pages. This is good practice to improve website maintainability.
* **In your second `.html` file**, you must use at least 8 different types of HTML tags total in the `<body>`, in addition to the required `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<link>`, and `<body>`
  * Suggestion: Refer to [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) for a comprehensive list of different HTML tags. You may use ones we haven't talked about in lecture, since there are many more that we could possibly cover in class as long as they are not in the list of deprecated tags from [this page](http://www.tutorialspoint.com/html5/html5_deprecated_tags.htm).
  * At least 2 of the 8 tags should be semantic tags listed under "HTML Layout Elements in More Detail" [here](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#HTML_layout_elements_in_more_detail).
* `styles.css` must have:
  * At least 4 additional different rulesets other than the one with the `body` selector provided in the starter file. Refer to [this page](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Selectors) for a CSS reference of selectors. One of your rulesets must use a combinatorial selector, and one of your rulesets should have a grouped (comma-separated) selector.
  * At least 10 different CSS properties defined which style content in your HTML files. You may change/remove the CSS properties in the starter `styles.css`. The 5 provided properties _do count_ towards the required 10.
  * At least one [Google font](https://fonts.google.com/) of your choice imported and used with an appropriate default font (e.g. `sans-serif`) specified. Remember to import Google fonts in the `head` of your HTML file using a `link` tag! The Google font link must be the one that's generated for you while selecting fonts on the Google Font site.
* **All links, file and directory names in your project must be lowercased without spaces** (e.g. `img/puppy.jpg` but not `img/puppy.JPG`, `IMG/puppy.jpg` or `img/Puppy.jpg`). This is enforced to avoid broken links commonly occurring in CP submissions due to case-insensitivity of file names on Windows machines. In general, it is also just good practice for file/directory naming.

## Internal Requirements
* Links to **your** `.html` and `.css` files should be **relative links**, not absolute.
  - A relative link is one that is _relative_ to the current page. For example, this means that if both your `.html` files are located in the same directory at the same level you can add a link to the second `.html` file from the first using the name of the desired `.html` file.
* Your HTML and CSS should demonstrate good code quality as demonstrated in class. Common good code quality practices include:
  * Using consistent indentation, proper naming conventions, curly brace locations, etc. Remember that IDs and classes should be in all-lowercase conventions and multiple words are optionally separated by "-".
  * Keep lines fewer than 100 characters for readability (links are an exception to this rule)
  * Do not express style information in the HTML, such as through inline styles or presentational HTML tags such as `b`, `i` or `font`.
  * Prefer CSS selectors instead of using too many classes or IDs in your HTML.
  * Do not include unused, duplicate, or overridden CSS rules or rulesets and use shared CSS selectors to factor out redundancy. Make sure to double-check that you didn't leave any unused styles in before submitting!
* For full credit, all HTML and CSS files must be well-formed.
* Note: You _may_ use a framework such as Bootstrap to help with your styling and helpful responsive layout features, however you must still meet all of the above requirements and demonstrate that you understand the key concepts of how the HTML and CSS work. Any framework code _will not count_ towards HTML/CSS requirements (e.g. if you use the Bootstrap "container" class in your HTML, you cannot count the CSS implementation in the bootstrap.css file towards the CSS requirements), however you can add new (not duplicate) CSS for this class to `styles.css`. You are not allowed to use any template HTML files for frameworks (this defeats the purpose of writing HTML and CSS from scratch in this first assignment).
  * Don't know what any of that means but want to learn how to use a CSS framework? Ask about them in office hours!

# Creative Project 2 - upcoming
# Creative Project 3 - upcoming
# Creative Project 4 - upcoming