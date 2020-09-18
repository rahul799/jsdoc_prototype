// @ts-check

/**
 * a collection of one or more elements (nodes and edges)
 * @typedef {object} eles
 */

/**
 * a collection of a single element (node or edge)
 * @typedef {object} ele
 */

/**
 * a collection of one or more nodes
 * @typedef {object} nodes
 */

 /**
 * a collection of one or more nodes
 * @typedef {boolean} selector
 */

/**
 * a collection of a single node
 * @typedef {object} node	
 */

/**
 * a collection of one or more edges
 * @typedef {object} edges
 */

/**
 * a collection of a single edge
 * @typedef {object} edge
 */

/**
 * a layout
 * @typedef {object} layout
 */

/**
 * an animation
 * @typedef {object} ani
 */

var cytoscape = require('cytoscape');


/**
 * @namespace cy
 */
var cy = cytoscape({
  container: document.getElementById('cy')
});

  /**
 * Add elements to the graph and return them
 * @memberof cy
 * @param { ele | eles } x - A plain object that specifies the element or A collection of elements.
 * @namespace cy.add
 */
function add(x){

}

  /**
 * Remove elements from the graph and return them.
 * @memberof cy
 * @param { eles | selector } x - A plain object that specifies the element or A collection of elements.
 * @namespace cy.remove
 */
function remove(x){

}

  /**
 * Return a new, empty collection.
 * @memberof cy 
 * @namespace cy.collection
 */
function collection(){

}

  /**
 * Get an element from its ID in a very performant way
 * @memberof cy
 * @alias cy.$id
 * @param { ele } x - The ID of the element to get. 
 * @namespace cy.getElementById
 */
function getElementById(x){

}

  /**
 * Get an element from its ID in a very performant way
 * @memberof cy
 * @param {function():any} callback - A callback within which you can make batch updates to elements.
 * @namespace cy.batch
 */
function batch(callback){

}

  /**
 * Attaches the instance to the specified container for visualisation.
 * @memberof cy
 * @param { object } container - A HTML DOM element in which the graph should be rendered.
 * @namespace cy.mount
 */
function mount(container){

}