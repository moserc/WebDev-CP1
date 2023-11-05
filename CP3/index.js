/*
 * Name: Cheryl Moser
 * Date: November 4, 2023
 *
 * Adds functionality to index html file.
 * Adds click-event to 'btn' button which initiates an API
 * call to boredapi.com. Returns a random activity suggestion.
 */

"use strict";

(function() {

  const URL = 'https://www.boredapi.com/api/activity';

  window.addEventListener("load", init);

  /**Adds click functionality to button 'btn'.*/
  function init() {
      id('btn').addEventListener('click', request);
  }

  /**Fetches data from the bored api.*/
  function request() {
    console.log('fetching...');
    fetch(URL)
      .then(statusCheck)
      .then(resp => resp.json()) //returns JSON as a js object
      .then(generateActivity)
      .catch(err);

      id("btn").innerHTML = "Press me again!";
      
      console.log('fetched!');
  }

  /**Uses data returned by an API call to display a random activity
   * suggestion. Displays three items from the data: activity,
   * number of participants needed, and a link (if provided).
   * @param {object} data data from the API call
  */
  function generateActivity(data){    
    
    clear();
    /*append new paragraphs to 'result' section; one each for activity, participants,
    and a link for more info, if provided*/
    let name = gen('p');
    name.id = 'activity';
    name.innerHTML = data.activity + '!';
    id('result').appendChild(name);

    let people = gen('p');
    people.innerHTML = 'Recommended minimum participants: ' + data.participants;
    id('result').appendChild(people);

    let link = gen('p');
    if (data.link != ''){
      link.innerHTML = '<br>'+'More info at: ' + data.link;
    }
    id('result').appendChild(link);
  }

  /** ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Called to return a successful or rejection response from the web service.
   * @param {object} res - response
   * @return {object} - a successful or rejection response
   */
    async function statusCheck(res) {
      if (!res.ok) {
        throw new Error(await res.text());
      }
      return res;
    }

  /** Error handling for failed status check.
   * @returns {String} an error message
   */
  function err() {
    let msg = 'Something went wrong. No activities here.';
    return id('result').innerHTML = msg;
  }

  /** 
   * Clears content from the 'result' tag.
   * @returns {String} an empty string
   */
  function clear(){
    return id('result').innerHTML = '';
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
})();