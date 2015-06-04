"use strict";

/**
 * ### Problem 2. Reverse number ###
 *	Write a function that reverses the digits of given decimal number.
 */

var reverseNumber = function(number){
    if(isNaN(number)){
        return 'Invalid input value';
    }
    return parseFloat(number.toString().split("").reverse().join(""));
};

var testValues = [256, 123.45, 'apple', [1, 2, 3] ];

testValues.forEach(function(val){
    console.log('The reversed value of ' + val + ' is:');
    console.log(reverseNumber(val));
});