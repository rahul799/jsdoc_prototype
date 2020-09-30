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

/**
 * @typedef {object} cy_getElementById
 * @property {object} id - The ID of the element to get.
 */


  /**
 * Get an element from its ID in a very performant way
 * @memberof cy
 * @alias cy.$id
 * @param {...cy_getElementById} x - Get ID
 * @namespace cy.getElementById
 */
function getElementById(x){

}

/**
 * @callback filter_callback
 * @property {filter_callback_type} function(ele,i,eles) - filter_callback_type
 */

/**
 * function(ele, i, eles)
 * @typedef {object} filter_callback_type
 * @property {object} ele - The current element under consideration for filtering.
 * @property {object} i - The counter used for iteration over the elements in the graph.
 * @property {object} eles - The collection of elements being filtered
 */

/**
 * @typedef {object} cy_$
 * @property {object} selector - The selector the elements should match.
 * @property {object} selector - The selector the elements should match.
 * @property {object} selector - The selector the elements should match.
 * @property {object} selector - The selector the elements should match.
 * @property {object} selector - The selector the elements should match.
 * @property {function(filter_callback):any} filter_callback - The filter function that returns true for elements that should be returned.
 */

  /**
 * Get elements in the graph matching a selector or a filter function.
 * @memberof cy
 * @sub_functions cy.$|cy.elements|cy.nodes|cy.edges|cy.filter|cy.filter
 * @param {...cy_$} x - Get elements in the graph matching the specified selector. | Get elements in the graph matching the specified selector. | Get nodes in the graph matching the specified selector. | Get edges in the graph matching the specified selector. | Get elements in the graph matching the specified selector. | Get elements in the graph matching the specified filter function.
 * @namespace cy.$
 */
function $(x){

}

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