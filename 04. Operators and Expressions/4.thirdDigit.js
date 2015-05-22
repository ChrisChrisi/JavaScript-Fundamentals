"use strict";
/**
 * ### Problem 4. Third digit
 * Write an expression that checks for given integer if its third digit (right-to-left) is 7.
 */

var thirdDigit = function(number){
    // reverse the numbers
    var revNum = String(number).split("").reverse().join("");
    //check weather the third digit is 7
    return String(revNum).charAt(2) === '7';
};

exports.thirdDigit = thirdDigit;