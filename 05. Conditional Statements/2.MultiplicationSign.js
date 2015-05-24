"use strict";

/**
 ### Problem 2. Multiplication Sign ###
 *    Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
 *    Use a sequence of `if` operators.
 */

var multiplicationSign = function (a, b, c) {
    if (a === 0 || b === 0 || c === 0) {
        return '0';
    } else if(a > 0 && b > 0 && c > 0){
        return '+';
    } else if ((a < 0 && b > 0 && c > 0) ||
               (a > 0 && b < 0 && c > 0) ||
               (a > 0 && b > 0 && c < 0)) {
        return '-';
    } else if ((a < 0 && b < 0 && c > 0) ||
             (a > 0 && b < 0 && c < 0) ||
             (a < 0 && b > 0 && c < 0)) {
        return '+';
    } else if (a < 0 && b < 0 && c < 0) {
        return '-';
    }
};

var testValues = [[5, 2, 2],
                  [-2, -2, 1],
                  [-2, 4, 3],
                  [0, -2.5, 4],
                  [-1, -0.5, -5.1]];

//testValues.forEach(function(value){
//    console.log('The multiplication sign of ' + value[0] + ", " + value[1] + " and "+ value[2] + " is:" );
//    console.log(multiplicationSign(value[0], value[1], value[2]));
//});

exports.multiplicationSign = multiplicationSign;