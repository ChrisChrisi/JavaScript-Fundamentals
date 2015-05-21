"use strict";
/**
 ### Problem 2. Divisible by 7 and 5
 *	Write a boolean expression that checks for given integer if it can be divided (without remainder) by `7` and `5` in the same time.
 */

var divisibleBy7And5 = function(number){
    return (number % 35 === 0);
};

exports.divisibleBy7And5 = divisibleBy7And5;