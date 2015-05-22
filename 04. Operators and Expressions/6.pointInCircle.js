"use strict";

/**
 * ### Problem 6. Point in Circle
 *    Write an expression that checks if given point `P(x,  y)` is within a circle `K(O, 5)`.
 */

var pontInCircle = function(x, y){
    return (Math.pow(x, 2) + Math.pow(y, 2)) < 25;
};

exports.pointInCircle = pontInCircle;