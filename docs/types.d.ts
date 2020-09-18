/**
 * a collection of one or more elements (nodes and edges)
 */
declare type eles = any;

/**
 * a collection of a single element (node or edge)
 */
declare type ele = any;

/**
 * a collection of one or more nodes
 */
declare type nodes = any;

/**
 * a collection of one or more nodes
 */
declare type selector = boolean;

/**
 * a collection of a single node
 */
declare type node = any;

/**
 * a collection of one or more edges
 */
declare type edges = any;

/**
 * a collection of a single edge
 */
declare type edge = any;

/**
 * a layout
 */
declare type layout = any;

/**
 * an animation
 */
declare type ani = any;

declare namespace cy {
    /**
     * Add elements to the graph and return them
     */
    namespace add { }
    /**
     * Remove elements from the graph and return them.
     */
    namespace remove { }
    /**
     * Return a new, empty collection.
     */
    namespace collection { }
    /**
     * Get an element from its ID in a very performant way
     */
    namespace getElementById { }
    /**
     * Get an element from its ID in a very performant way
     */
    namespace batch { }
}

