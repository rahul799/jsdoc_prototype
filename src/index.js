// @ts-check

var cytoscape = require('cytoscape');


/**
 * @namespace cy
 */
var cy = cytoscape({
  container: document.getElementById('cy')
});

/**
 * @typedef {object} cy_add
 * @property {object} eleObj - A plain object that specifies the element.
 * @property {object} eleObjs - An array of elements specified by plain objects.
 * @property {object} eles - A collection of elements.
 */

  /**
 * Add elements to the graph and return them
 * @memberof cy
 * @param {...cy_add} x - Add a specified element to the graph. | Add the specified elements to the graph. | Add the specified elements to the graph.
 * @namespace cy.add
 */
function add(x){

}

/**
 * @typedef {object} cy_remove
 * @property {object} eles -A collection of elements to remove.
 * @property {object} selector - Elements matching this selector are removed.
 */

  /**
 * Remove elements from the graph and return them.
 * @memberof cy
 * @param {...cy_remove} x - Remove the specified elements. | Remove elements in the graph matching the specified selector.
 * @namespace cy.remove
 */
function remove(x){

}

  /**
 * Return a new, empty collection.
 * @memberof cy
 * @param_desc Get an empty collection.
 * @namespace cy.collection
 */
function collection(){

}

//   /**
//  * Get an element from its ID in a very performant way
//  * @memberof cy
//  * @alias cy.$id
//  * @param { ele } x - The ID of the element to get. 
//  * @namespace cy.getElementById
//  */
// function getElementById(x){

// }

//   /**
//  * Get an element from its ID in a very performant way
//  * @memberof cy
//  * @param {function():any} callback - A callback within which you can make batch updates to elements.
//  * @namespace cy.batch
//  */
// function batch(callback){

// }

//   /**
//  * Attaches the instance to the specified container for visualisation.
//  * @memberof cy
//  * @param { object } container - A HTML DOM element in which the graph should be rendered.
//  * @namespace cy.mount
//  */
// function mount(container){

// }