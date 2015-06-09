"use strict";

/**
 * ### Problem 10. Find palindromes
 *    Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
 */

var isPalindrome = function (word) {
    if(word.length < 2 || typeof word !== 'string'){
        return false;
    }
    var firstHalf,
        secondHalf,
        length = word.length ;
    if (length % 2 === 0){
        firstHalf = word.substr(0, length / 2);
        secondHalf = word.substr(length/2);
    } else
    {
        firstHalf = word.substr(0, parseInt(length / 2));
        secondHalf = word.substr(parseInt(length / 2) + 1);
    }
    secondHalf =secondHalf.split('').reverse().join('');
    return firstHalf === secondHalf;
};

var findPalindromes = function(str){
    return str.split(" ").filter(isPalindrome);
};

var text = "Here is some noon text safd abba adf  dfsad poap sdf exe  sdf";

console.log(findPalindromes(text));