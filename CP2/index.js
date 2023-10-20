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

  window.addEventListener("load", init);

  /**
   * Adds click functionality to buttons 'Add item' and 'Clear All'.
   */
  function init() {
      id('add').addEventListener('click', addItem);
      id('add').addEventListener('click', clear);
      id('clear').addEventListener('click', clearAll);
  }

  /**
   * Adds the value from the 'Specify item:' input field to a list.
   * Uses the value from the dropdown menu to place the item into its associated category.
   */
  function addItem() {
    btnToggle(); //For visual click effect
    let item = id('item').value;
    let category = id('groc').value.toLowerCase();

    if (item != ''){//user input cannot be blank

      //create li element and populate it with the specified item
      let listItem = gen('li');
      listItem.textContent = item;

      //add an event listener to each item, removes the item when double-clicked
      listItem.addEventListener('dblclick', function(){
          this.remove();
      });
      
      //get nodelist of all unordered lists within the result section
      let ulId = qsa('#result > dl > ul');

      //compare the chosen category against the nodelist, append the list element if equal
      for (let i = 0; i < ulId.length; i++){
        //test: confirm nodelist
        //console.log(ulId[i].id);
        if (ulId[i].id == category){
          ulId[i].appendChild(listItem);
          break;   
        }
      }

//----for testing----   
/*       console.log(item);
      console.log(category);
      console.log(ulId);
      console.log(listItem); */

    }else{ //throw an alert if no item is specified
      alert('please enter an item');
    }
  }

  /**
   * Clears the value of the 'specify item' user input field.
   */
  function clear() {
      item.value = '';
    }

  /**
   * Clears all <li> elements from #result
   */
  function clearAll() {
    let allListItems = qsa('#result > dl > ul > li');
      for (let i = 0; i < allListItems.length; i++){
          allListItems[i].remove();
      }
  }

  /** ------------------------------ Helper Functions  ------------------------------ */

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