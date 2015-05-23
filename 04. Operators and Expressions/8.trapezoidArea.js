"use strict";

/**
 * ### Problem 8. Trapezoid area
 *    Write an expression that calculates trapezoid's area by given sides `a` and `b` and height `h`.
 */

var trapezoidArea = function (a, b, h) {
    var result = (( (a + b) / 2 ) * h);
    return parseFloat(result.toPrecision(7).toString());
};

var testValues = [[5, 7, 12],
                  [2, 1, 33],
                  [8.5, 4.3, 2.7],
                  [100, 200, 300],
                  [0.222, 0.333, 0.555]];

//testValues.forEach(function(value){
//    console.log("The area of trapezoid with sides"+value[0]+", "+value[1]+ " and height "+value[2]+" is:");
//    console.log(trapezoidArea(value[0], value[1], value[2]));
//});

exports.trapezoidAra = trapezoidArea;
