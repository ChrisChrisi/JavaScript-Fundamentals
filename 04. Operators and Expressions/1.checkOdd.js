"use strict";

/**
 * ### Problem 1. Odd or Even
 *	Write an expression that checks if given integer is odd or even.
*/
var  checkOdd = function($number){
    return (Math.abs($number % 2) === 1);
};

exports.checkOdd = checkOdd;