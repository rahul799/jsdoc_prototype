// @ts-check

var cytoscape = require('cytoscape');


/**
 * @namespace cy
 */
var cy = cytoscape({
  container: document.getElementById('cy')
});

/**
 * Get the HTML DOM element in which the graph is visualised. A null value is returned if the instance is headless.
 * @memberof cy
 * @namespace cy.container
 */
function container(){

}

/**
 * @typedef {object} cy_center
 * @property {object} NULL
 * @property {object} eles - The collection to centre upon.
 */

  /**
 * Pan the graph to the centre of a collection.
 * @memberof cy_center
 * @alias cy.centre
 * @param {...cy_center} x - Centre on all elements in the graph. | Centre on the specified elements.
 * @namespace cy.center
 */
function center(x){

}

/**
 *  eles, padding
 * @typedef {object} cy_fit_eles_padding
 * @property {object} eles - The collection to fit to.
 * @property {object} padding -  An amount of padding (in rendered pixels) to have around the graph (default 0).
 */

/**
 * @typedef {object} cy_fit
 * @property {object} NULL
 * @property {cy_fit_eles_padding} cy_fit_eles_padding
 */

  /**
 * Pan and zooms the graph to fit to a collection.
 * @memberof cy
 * @param {...cy_fit} x - Fit to all elements in the graph. | Fit to the specified elements.
 * @namespace cy.fit
 */
function fit(x){

}

/**
 * Reset the graph to the default zoom level and panning position.
 * @memberof cy
 * @namespace cy.reset
 */
function reset(){

}

/**
 * @typedef {object} cy_pan
 * @property {object} NULL
 * @property {object} renderedPosition - The rendered position to pan the graph to.
 */

  /**
 * Get or set the panning position of the graph.
 * @memberof cy
 * @param {...cy_pan} x - Get the current panning position. | Set the current panning position.
 * @namespace cy.pan
 */
function pan(x){

}

/**
 * @typedef {object} cy_panBy
 * @property {object} renderedPosition - The rendered position vector to pan the graph by.
 */

  /**
 * Relatively pan the graph by a specified rendered position vector.
 * @memberof cy
 * @param {...cy_panBy} x - The rendered position
 * @namespace cy.panBy
 */
function panBy(x){

}

/**
 * @typedef {object} cy_panningEnabled
 * @property {object} NULL
 * @property {object} bool - A truthy value enables panning; a falsey value disables it.
 */

  /**
 * Get or set whether panning is enabled.
 * @memberof cy
 * @param {...cy_panningEnabled} x - Get whether panning is enabled. | Set whether panning is enabled
 * @namespace cy.panningEnabled
 */
function panningEnabled(x){

}

/**
 * @typedef {object} cy_userPanningEnabled
 * @property {object} NULL
 * @property {object} bool - A truthy value enables panning; a falsey value disables it.
 */

  /**
 * Get or set whether panning by user events (e.g. dragging the graph background) is enabled.
 * @memberof cy
 * @param {...cy_userPanningEnabled} x - Get whether panning is enabled. | Set whether panning is enabled
 * @namespace cy.userPanningEnabled
 */
function userPanningEnabled(x){

}

/**
 * @typedef {object} cy_zoomingEnabled
 * @property {object} NULL
 * @property {object} bool - A truthy value enables zooming; a falsey value disables it.
 */

  /**
 * Get or set whether zooming is enabled.
 * @memberof cy
 * @param {...cy_zoomingEnabled} x - Get whether zooming is enabled. | Set whether zooming is enabled
 * @namespace cy.zoomingEnabled
 */
function zoomingEnabled(x){

}

/**
 * @typedef {object} cy_userZoomingEnabled
 * @property {object} NULL
 * @property {object} bool - A truthy value enables user zooming; a falsey value disables it.
 */

  /**
 * Get or set whether user zooming by user events (e.g. mouse wheel, pinch-to-zoom) is enabled.
 * @memberof cy
 * @param {...cy_userZoomingEnabled} x - Get whether user zooming is enabled. | Set whether zooming is enabled
 * @namespace cy.userZoomingEnabled
 */
function userZoomingEnabled(x){

}

/**
 * @typedef {object} cy_minZoom
 * @property {object} NULL
 * @property {object} zoom - The new minimum zoom level to use.
 */

  /**
 * Get or set the minimum zoom level.
 * @memberof cy
 * @param {...cy_minZoom} x - Get the minimum zoom level. | Set the minimum zoom level.
 * @namespace cy.minZoom
 */
function minZoom(x){

}

/**
 * @typedef {object} cy_maxZoom
 * @property {object} NULL
 * @property {object} zoom - The new maximum zoom level to use.
 */

  /**
 * Get or set the maximum zoom level.
 * @memberof cy
 * @param {...cy_maxZoom} x - Get the maximum zoom level. | Set the maximum zoom level.
 * @namespace cy.maxZoom
 */
function maxZoom(x){

}

/**
 *  zoom, pan
 * @typedef {object} cy_viewport_zoom_pan
 * @property {object} zoom - The zoom level to set.
 * @property {object} pan - The pan to set (a rendered position).
 */

/**
 * @typedef {object} cy_viewport
 * @property {cy_viewport_zoom_pan} cy_viewport_zoom_pan
 */

  /**
 * Set the viewport state (pan & zoom) in one call.
 * @memberof cy
 * @param {...cy_viewport} x - Set viewport
 * @namespace cy.viewport
 */
function viewport(x){

}

/**
 * @typedef {object} cy_boxSelectionEnabled
 * @property {object} NULL
 * @property {object} bool - A truthy value enables box selection; a falsey value disables it.
 */

  /**
 * Get or set whether box selection is enabled. If enabled along with panning, the user must hold down one of shift, control, alt, or command to initiate box selection.
 * @memberof cy
 * @param {...cy_boxSelectionEnabled} x - Get whether box selection is enabled. | Set whether box selection is enabled.
 * @namespace cy.boxSelectionEnabled
 */
function boxSelectionEnabled(x){

}

/**
 * @typedef {object} cy_selectionType
 * @property {object} NULL
 * @property {object} type - The selection type string; one of `'single'` (default) or `'additive'`.
 */

  /**
 * Get or set the selection type.  The `'single'` selection type is the default, tapping an element selects that element and deselects the previous elements.  The `'additive' selection type toggles the selection state of an element when tapped.`
 * @memberof cy
 * @param {...cy_selectionType} x - Get the selection type string. | Set the selection type.
 * @namespace cy.selectionType
 */
function selectionType(x){

}

/**
 * Get the on-screen width of the viewport in pixels.
 * @memberof cy
 * @namespace cy.width
 */
function width(){

}

/**
 * Get the on-screen height of the viewport in pixels.
 * @memberof cy
 * @namespace cy.height
 */
function height(){

}

/**
 * Get the extent of the viewport, a bounding box in model co-ordinates that lets you know what model positions are visible in the viewport.
 * @memberof cy
 * @namespace cy.extent
 */
function extent(){

}

/**
 * @typedef {object} cy_autolock
 * @property {object} NULL
 * @property {object} bool - A truthy value enables autolocking; a falsey value disables it.
 */

  /**
 * Get or set whether nodes are automatically locked (i.e. if `true`, nodes are locked despite their individual state).
 * @memberof cy
 * @param {...cy_autolock} x - Get whether autolocking is enabled. | Set whether autolocking is enabled.
 * @namespace cy.autolock
 */
function autolock(x){

}

/**
 * @typedef {object} cy_autoungrabify
 * @property {object} NULL
 * @property {object} bool - A truthy value enables autoungrabifying; a falsey value disables it.
 */

  /**
 * Get or set whether nodes are automatically ungrabified (i.e. if `true`, nodes are ungrabbale despite their individual state).
 * @memberof cy
 * @param {...cy_autoungrabify} x - Get whether autoungrabifying is enabled. | Set whether autoungrabifying is enabled.
 * @namespace cy.autoungrabify
 */
function autoungrabify(x){

}

/**
 * @typedef {object} cy_autounselectify
 * @property {object} NULL
 * @property {object} bool - A truthy value enables autounselectifying; a falsey value disables it.
 */

  /**
 * Get or set whether nodes are automatically unselectified (i.e. if `true`, nodes are ungrabbale despite their individual state).
 * @memberof cy
 * @param {...cy_autounselectify} x - Get whether autounselectifying is enabled. | Set whether autounselectifying is enabled.
 * @namespace cy.autounselectify
 */
function autounselectify(x){

}

/**
 * Force the renderer to recalculate the viewport bounds.
 * @memberof cy
 * @alias cy,invalidateDimensions
 * @namespace cy.resize
 */
function resize(){

}