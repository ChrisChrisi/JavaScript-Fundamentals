"use strict";
/**
 * ### Problem 4. Third digit
 * Write an expression that checks for given integer if its third digit (right-to-left) is 7.
 */

var thirdDigit = function(number){
    // Math.floor(num / 100) % 10;

    return (Math.floor(number / 100) % 10) === 7;
};

//console.log(thirdDigit(5));
//console.log(thirdDigit(701));
//console.log(thirdDigit(1732));
//console.log(thirdDigit(9703));
//console.log(thirdDigit(877));
//console.log(thirdDigit(777877));
//console.log(thirdDigit(9999799));

exports.thirdDigit = thirdDigit;