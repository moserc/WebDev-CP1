/**
 * Name: Cheryl Moser
 * Date: 10/19/2023
 *
 * Used by shopping-list html file.
 * Adds click-functionality to add & print buttons.
 * Adds double-click functionality to list items for easy removal.
 */
"use strict";

(function() {

    window.addEventListener("load", init);

    /**
     * Adds click functionality to buttons; double-click functionality to list items.
     */
    function init() {
        id('add').addEventListener('click', addItem);
        id('add').addEventListener('click', clear);
        id('clear').addEventListener('click', clearAll);
    }

    /**
     * Adds the input item to the list of its associated category.
     */
    function addItem() {
        let item = id('item').value;
        let category = id('groc').value.toLowerCase();
        let categories = qsa('option');

        let listItem = gen('li'); //create li
        listItem.textContent = item;

        listItem.addEventListener('dblclick', function(){
            this.remove();
        });
        
        id('bev').appendChild(listItem); //append li to associated ul        

        console.log(item);
        console.log(category);
        console.log(categories);
        console.log(listItem);
    }

    function clear() {
        item.value = '';
      }

    function clearAll() {
        let allListItems = qsa('#bev > li');
        for (let i = 0; allListItems.length; i++){
            allListItems[i].remove();
        }
    }

    /** ------------------------------ Helper Functions  ------------------------------ */

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

    /**
     * Returns a new element with the given tag name.
     * @param {string} tagName - HTML tag name for new DOM element.
     * @returns {object} New DOM object for given HTML tag.
     */
    function gen(tagName) {
        return document.createElement(tagName);
    }

})();
