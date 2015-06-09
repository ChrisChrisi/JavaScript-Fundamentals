"use strict";

/**
 * ### Problem 1. Reverse string
 *	Write a JavaScript function that reverses a string and returns it.
 */

var reverseString = function(str){
    return str.split('').reverse().join('');
};

var str1 = "Some string";

console.log(reverseString(str1));