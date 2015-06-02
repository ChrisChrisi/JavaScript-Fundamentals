"use strict";

/**
 * ### Problem 2. Lexicographically comparison ###
 *	Write a script that compares two char arrays lexicographically (letter by letter).
 */

var lexComparison = function(arr1, arr2){
var str1 = arr1.toString(),
    str2 = arr2.toString();
    return str1 < str2 ? 'second greater' : str1 > str2 ? 'first greater' : 'equal';
};


console.log(lexComparison(['a', 'b', 'c'], ['a', 'b', 'c']));
console.log(lexComparison(['c', 'b', 'c'], ['a', 'b', 'c']));
console.log(lexComparison(['a', 'b', 'c'], ['ba', 'b', 'c']));