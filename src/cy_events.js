// @ts-check

var cytoscape = require('cytoscape');


/**
 * @namespace cy
 */
var cy = cytoscape({
  container: document.getElementById('cy')
});

/**
 * events [, selector], function(event)
 * @typedef {object} cy_on_callback_type
 * @property {object} event - The event object.
 */

/**
 * @callback cy_on_callback
 * @property {cy_on_callback_type} function(event) - cy_on_callback_type
 */

/**
 * @typedef {object} cy_events_on
 * @property {object} events - A space separated list of event names.
 * @property {object} selector - A selector to specify elements for which the handler runs.
 * @property {function(cy_on_callback):any} cy_on_callback - The handler function that is called when one of the specified events occurs.
 */

/**
 * @typedef {object} cy_on
 * @property {cy_events_on} cy_events_on
 */

  /**
 * Listen to events that occur on the core.
 * @memberof cy
 * @alias cy.bind|cy.listen|cy.addListner
 * @sub_functions cy.on
 * @param {...cy_on} x - Listen to events that bubble up from elements matching the specified node selector:
 * @namespace cy.on
 */
function on(x){

}


/**
 * @typedef {object} cy_promiseOn_events_selector
 * @property {object} events - A space separated list of event names.
 * @property {object} selector - A selector to specify elements for which the handler runs.
 */

/**
 * @typedef {object} cy_promiseOn
 * @property {cy_promiseOn_events_selector} cy_promiseOn_events_selector
 */

  /**
 * @memberof cy
 * @alias cy.pon
 * @sub_functions cy.promiseOn
 * @param {...cy_promiseOn} x - Get a promise that is resolved when the core emits the first of any of the specified events.
 * @namespace cy.promiseOn
 */
function promiseOn(x){

}


/**
 * events [, selector], function(event)
 * @typedef {object} cy_one_callback_type
 * @property {object} event - The event object.
 */

/**
 * @callback cy_one_callback
 * @property {cy_one_callback_type} function(event) - cy_one_callback_type
 */

/**
 * @typedef {object} cy_events_one
 * @property {object} events - A space separated list of event names.
 * @property {object} selector - A selector to specify elements for which the handler runs.
 * @property {function(cy_one_callback):any} cy_one_callback - The handler function that is called when one of the specified events occurs.
 */

/**
 * @typedef {object} cy_one
 * @property {cy_events_one} cy_events_one
 */

  /**
 * @memberof cy
 * @sub_functions cy.one
 * @param {...cy_one} x - Listen to events that occur on the core, and run the handler only once.
 * @namespace cy.one
 */
function one(x){

}

/**
 * @typedef {object} cy_removeListner_events_selector_handler
 * @property {object} events - A space separated list of event names.
 * @property {object} selector - The same selector used to listen to the events.
 * @property {object} handler - A reference to the handler function to remove.
 */

/**
 * @typedef {object} cy_removeListner
 * @property {cy_removeListner_events_selector_handler} cy_removeListner_events_selector_handler
 */

  /**
 * @memberof cy
 * @alias cy.off|cy.unbind|cy.unlisten
 * @sub_functions cy.removeListner
 * @param {...cy_removeListner} x - Remove event handlers on the core.
 * @namespace cy.removeListner
 */
function removeListner(x){

}

/**
 * @typedef {object} cy_removeAllListners
 * @property {object} NULL
 */

  /**
 * @memberof cy
 * @sub_functions cy.removeAllListners
 * @param {...cy_removeAllListners} x - Remove all event handlers on the core.
 * @namespace cy.removeAllListners
 */
function removeAllListners(x){

}