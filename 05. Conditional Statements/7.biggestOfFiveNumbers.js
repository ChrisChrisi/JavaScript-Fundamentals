"use strict";

/**
 * ### Problem 7. The biggest of five numbers ###
 *    Write a script that finds the greatest of given 5 variables.
 *    Use nested `if` statements.
 */

var biggestOfFiveNumbers = function (a, b, c, d, e) {
    var max;
    if (a > b) {
        max = a;
        if (c > a) {
            max = c;
            if (d > c) {
                max = c;
                if (e > d) {
                    max = e;
                }
            }
        } else {
            if (d > a) {
                max = d;
                if (e > d) {
                    max = e;
                }
            } else if (e > a) {
                max = e;
            }

        }
    } else {
        max = b;
        if (c > b) {
            max = c;
            if (d > c) {
                max = c;
                if (e > d) {
                    max = e;
                }
            }
        } else {
            if (d > b) {
                max = d;
                if (e > d) {
                    max = e;
                }
            } else if (e >b) {
                max = e;
            }

        }
    }
return max;
};


var testValues = [[5, 2, 2, 4, 1],[-2, -22, 1, 0, 0], [-2, 4, 3, 2, 0], [0, -2.5, 0, 5, 5], [-3, -0.5, -1.1, -2, -0.1]];

//testValues.forEach(function(value){
//    console.log('Biggest of (' + value + ') is:');
//    console.log(biggestOfFiveNumbers(value[0], value[1],value[2], value[3], value[4]));
//});

exports.biggestOfFiveNumbers = biggestOfFiveNumbers;