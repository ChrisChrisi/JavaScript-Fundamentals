"use strict";

/**
 * ### Problem 4. Has property
 *    Write a function that checks if a given object contains a given property.

 var obj  = …;
 var hasProp = hasProperty(obj, 'length');
 */

var hasProperty = function (obj, prop) {
    var i;
    for (i in obj) {
        if (prop === i) {
            return true;
        }
    }
    return false;
};

var obj1 = {
        height: 15,
        width: 20,
        dept: 12
    },
    obj2 = {
        height: 15,
        length: 12,
        count: 20
    };

console.log(hasProperty(obj1, 'length'));
console.log(hasProperty(obj2, 'length'));
