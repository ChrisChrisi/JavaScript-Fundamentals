"use strict";
/**
 * ### Problem 2. Numbers not divisible ###
 *    Write a script that prints all the numbers from `1` to `N`, that are not divisible by `3` and `7` at the same time
 */

var notDivisibleBy3And7 = function(number){
    var i = 1;
    while(i <= number){
        if(i % 3 !== 0 && i % 7 !== 0){
            console.log(i + ' ');
        }
        i+= 1;
    }
};

console.log("Numbers from 1 to 10 that are not divisible by 3 and 7: ");
notDivisibleBy3And7(10);
console.log("Numbers from 1 to 21 that are not divisible by 3 and 7: ");
notDivisibleBy3And7(21);