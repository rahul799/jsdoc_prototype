// @ts-check

var cytoscape = require('cytoscape');


/**
 * @namespace cy
 */
var cy = cytoscape({
  container: document.getElementById('cy')
});

/**
 *  name, value
 * @typedef {object} cy_data_name_val
 * @property {object} name - The name of the field to set.
 * @property {object} value -  The value to set for the field.
 */

/**
 * @typedef {object} cy_data
 * @property {object} NULL
 * @property {object} name - The name of the field to get.
 * @property {cy_data_name_val} cy_data_name_val - Set a particular data field.
 * @property {object} obj - The object containing name-value pairs to update data fields.
 */

  /**
 * Read and write developer-defined data associated with the graph.
 * @memberof cy
 * @alias cy.attr
 * @formatsSameFn true
 * @sub_functions cy.data|cy.data|cy.data|cy.data
 * @param {...cy_data} x - Get the entire data object. | Get a particular data field. | Set a particular data field. | Update multiple data fields at once via an object.
 * @namespace cy.data
 */
function data(x){

}