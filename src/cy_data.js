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

/**
 * @typedef {object} cy_removeData
 * @property {object} NULL
 * @property {object} names - A space-separated list of fields to delete.
 */

  /**
 * Remove developer-defined data associated with the elements.
 * @memberof cy
 * @alias cy.removeAttr
 * @sub_functions cy.removeData|cy.removeData
 * @param {...cy_removeData} x - Removes all mutable data fields for the elements. | Removes the specified mutable data fields for the elements.
 * @namespace cy.removeData
 */
function removeData(x){

}

/**
 *  namespace, value
 * @typedef {object} cy_scratch_namespace_value
 * @property {object} name - A namespace string.
 * @property {object} value - The value to set at the specified namespace.
 */

/**
 * @typedef {object} cy_scratch
 * @property {object} NULL
 * @property {object} namespace - A namespace string.
 * @property {cy_scratch_namespace_value} cy_scratch_namespace_value
 */

  /**
 * Set or get scratchpad data, where temporary or non-JSON data can be stored.  App-level scratchpad data should use namespaces prefixed with underscore, like `'_foo'`.  This is analogous to the more common [`ele.scratch()`](#ele.scratch) but for graph global data.
 * @memberof cy
 * @extFn true
 * @sub_functions cy.scratch|cy.scratch|cy.scratch
 * @param {...cy_scratch} x - Get the entire scratchpad object for the core. | Get the scratchpad at a particular namespace. | Set the scratchpad at a particular namespace.
 * @namespace cy.scratch
 */
function scratch(x){

}

/**
 * @typedef {object} cy_removeScratch
 * @property {object} namespace - A namespace string.
 */

/**
 * Remove scratchpad data.  You should remove scratchpad data only at your own namespaces.  This is analogous to the more common [`ele.removeScratch()`](#ele.removeScratch) but for graph global data.
 * @memberof cy
 * @extFn true
 * @sub_functions cy.removeScratch
 * @param {...cy_removeScratch} x - Remove the scratchpad data at a particular namespace.
 * @namespace cy.removeScratch
 */
function removeScratch(x){

}