"use strict";

/**
 * ### Problem 5. Third bit
 *	Write a boolean expression for finding if the bit `#3` (counting from 0) of a given integer.
 *	The bits are counted from right to left, starting from bit `#0`.
 *	The result of the expression should be either `1` or `0`.
 */

var thirdBit = function(number){
    return (number >> 3) & 1;
};

//console.log("The third bit of 5 is: " + thirdBit(5));
//console.log("The third bit of 8 is: " + thirdBit(8));
//console.log("The third bit of 0 is: " + thirdBit(0));
//console.log("The third bit of 15 is: " + thirdBit(15));
//console.log("The third bit of 5343 is: " + thirdBit(5343));
//console.log("The third bit of 62241 is: " + thirdBit(62241));

exports.thirdBit = thirdBit;