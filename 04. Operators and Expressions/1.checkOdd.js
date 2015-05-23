"use strict";

/**
 * ### Problem 1. Odd or Even ###
 *	Write an expression that checks if given integer is odd or even.
*/
var  checkOdd = function($number){
    return ($number % 2 !== 0);
};

//console.log(checkOdd(3));
//console.log(checkOdd(2));
//console.log(checkOdd(-2));
//console.log(checkOdd(-1));
//console.log(checkOdd(0));

exports.checkOdd = checkOdd;