"use strict"

// Set
// Properties: size
// Methods: add - delete - clear - has - keys - values - entries

// Weekset (only stores objects)
// Properties: none
// Methods: add - delete - has
// no iteration allowed on weeksets as their content can be changed by the garbage collectorat any time.


// Map (key, value) pair (doesn't have default keys like object type)
// Key can be of any type (primitive, array, object, functoin, ...)
// preserving order of insertion
// can be iterated directly (they are iterables) but objects are not iterables
// properties: size
//  Better performace in adding & deleting data
// methods: set(key, value), get(key), has(key), delete(key), clear(), keys, values, entries

// WeakMap keys can only be objects, and it has the following methods (set, get, delete, has) only