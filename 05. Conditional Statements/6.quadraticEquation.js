"use strict";

/**
 * ### Problem 6. Quadratic equation ###
 *    Write a script that reads the coefficients `a`, `b` and `c` of a quadratic equation ax<sup>2</sup> + bx + c = 0
 *    and solves it (prints its real roots).
 *    Calculates and prints its real roots.
 *_Note: Quadratic equations may have 0, 1 or 2 real roots._
 */

// discr = b^2 - 4ac
// x1,2 = (-b +- sqr(discr)) / 2a

var quadraticEquation = function (a, b, c) {
    var discr = Math.pow(b, 2) - 4 * a * c;
    if (discr < 0) {
        return 'no real roots';
    }

    var x1 = ((-b - Math.sqrt(discr)) / (2*a));
    var x2 = ((-b + Math.sqrt(discr)) /(2*a));
    x1 = (x1 === 0 ? 0 : x1);
    x2 = (x2 === 0 ? 0 : x2);
    return [x1, x2];
};


var testValues = [[2, 5, -3],
                  [-1, 3, 0],
                  [-0.5, 4, -8],
                  [5, 2, 8]];

testValues.forEach(function(value){
    console.log('The roots of the equation '+ value[0] + 'x^2 + '+ value[1] + 'x + ' +value[2] + ' are: ' );
    console.log(quadraticEquation(value[0], value[1], value[2]));
});

exports.quadraticEquation = quadraticEquation;