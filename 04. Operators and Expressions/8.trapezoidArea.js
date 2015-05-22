"use strict";

/**
 * ### Problem 8. Trapezoid area
 *	Write an expression that calculates trapezoid's area by given sides `a` and `b` and height `h`.
 */

var trapezoidArea = function(a, b, h){
    return (( (a + b) / 2 ) * h).toPrecision(7);
};

exports.trapezoidAra = trapezoidArea;
