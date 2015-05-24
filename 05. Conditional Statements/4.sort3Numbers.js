"use strict";

/**
 * ### Problem 4. Sort 3 numbers ###
 *    Sort 3 real values in descending order.
 *    Use nested `if` statements.
 */
var sort3Numbers = function (a, b, c) {
    var min, mid, max;
    if (a > b) {
        if (c > b) {
            if (c > a) {
                max = c;
                mid = a;
                min = b;
            } else {
                max = a;
                mid = c;
                min = b;
            }
        } else {
            max = a;
            mid = b;
            min = c;
        }
    } else {
        if (c > a) {
            if (c > b) {
                max = c;
                mid = b;
                min = a;
            } else {
                max = b;
                mid = c;
                min = a;
            }
        } else {
            max = b;
            mid = a;
            min = c;
        }
    }
    return max + ' ' + mid + ' ' + min;
};

var testValues = [[5, 1, 2],
    [-2, -2, 1],
    [-2, 4, 3],
    [0, -2.5, 5],
    [-0.1, -0.5, -1.1],
    [10, 20, 30],
    [1, 1, 1]
];

//testValues.forEach(function(value){
//    console.log( value[0] + ', ' + value[1] + ' and ' + value[2] + ' sorted descending:' );
//    console.log(sort3Numbers(value[0], value[1], value[2]));
//});

exports.sort3Numbers = sort3Numbers;