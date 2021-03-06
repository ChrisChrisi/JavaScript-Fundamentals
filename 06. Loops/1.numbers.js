"use strict";

/**
 * ### Problem 1. Numbers ##
 *	Write a script that prints all the numbers from `1` to `N`.
 */

var allNumbersFrom1ToN = function(number){
    var i;
    if(number >0){
    for(i = 1; i<= number; i++){
        console.log(i + ' ');
    }} else {
        for(i = 1; i>= number; i--){
            console.log(i + ' ');
        }
    }
};

console.log("Numbers from 1 to 5: ");
allNumbersFrom1ToN(5);
console.log("Numbers from 1 to -5: ");
allNumbersFrom1ToN(-5);