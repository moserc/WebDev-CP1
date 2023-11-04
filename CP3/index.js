/**
 * Name: Cheryl Moser
 * Date: October 20, 2023
 *
 * Adds functionality to shopping-list html file.
 * Adds click-events to 'add' & 'clear all' buttons.
 * Adds double-click event to each added item.
 * Double-clicking on the item will remove it.
 */

"use strict";

(function() {

  const URL = 'http://www.boredapi.com/api/activity';

  window.addEventListener("load", init);

  /**
   * Adds click functionality to buttons 'Add item' and 'Clear All'.
   */
  function init() {
      id('btn').addEventListener('click', request);
  }

  /***/
  function request() {
    //TODO what happens when the button is clicked
    //clear();
    console.log('fetching...');

    fetch(URL)
      .then(statusCheck)
      .then(resp => resp.json()) //js obj
      .then(generateActivity)
      .catch(err);

      id("btn").innerHTML = "Press me again!";
      console.log('fetched!');
  }

  function generateActivity(data){
    console.log(data);
    let name = data.activity;
    let people = data.participants;
    let link = '';
    if (data.link != ''){
      link = data.link;
    }else{
      link = 'No link given.'
    }
    id("result").innerHTML = 'Activity: ' + name + '!' + "<br />" +  
      'Recommended participants: ' + people + "." + "<br />" + 
      "More info at: "+ "<br />" + link;
  }

  /** ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Called to return a successful or rejection response from the web service.
   * @param {object} res - response
   * @return {object} - successful or rejection response
   */
    async function statusCheck(res) {
      if (!res.ok) {
        throw new Error(await res.text());
      }
      return res;
    }

  /** Error handling for failed status check.
   * @returns {String} error message
   */
  function err() {
    let msg = 'Something went wrong. No activities here.';
    return id('result').innerHTML = msg;
  }

  /**
   * Changes the background color and displays 'Added!' when the 'Add item' button is clicked.
   * Times-out after 700ms and returns the button to original state.
   */
  function btnToggle(){
    let btn = id('add');
    console.log(btn);
    if(btn.classList = 'null'){
      btn.innerHTML = "Added!";
      btn.classList.toggle('btnStyle');
      setTimeout(function () {
        btn.classList = 'null'
        btn.innerHTML = "Add item";
      }, 700);
    }
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
}

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
      return document.getElementById(idName);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(selector) {
      return document.querySelectorAll(selector);
  }
})();