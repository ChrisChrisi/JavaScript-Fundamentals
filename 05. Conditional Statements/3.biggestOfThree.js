"use strict";

/**
 * ### Problem 3. The biggest of Three ##
 *    Write a script that finds the biggest of three numbers.
 *    Use nested `if` statements.
 */

var biggestOfThree = function (a, b, c) {
    if (a > b) {
        if (a > c) {
            return a;
        } else {
            return c;
        }
    } else {
        if (b > c) {
            return b;
        } else {
            return c;
        }

    }
};

var testValues = [[5, 2, 2],
                  [-2, -2, 1],
                  [-2, 4, 3],
                  [0, -2.5, 5],
                  [-0.1, -0.5, -1.1]];

//testValues.forEach(function(value){
//    console.log('The biggest of ' + value[0] + ', ' + value[1] + ' and ' + value[2] + ' is:' );
//    console.log(biggestOfThree(value[0], value[1], value[2]));
//});

exports.biggestOfThree = biggestOfThree;