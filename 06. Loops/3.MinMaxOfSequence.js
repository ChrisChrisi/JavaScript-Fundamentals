"use strict";

/**
 * ### Problem 3. Min/Max of sequence ###
 *	Write a script that finds the `max` and `min` number from a sequence of numbers.
 */

var minMax = function(sequence){
    var min = sequence[0],
        max = sequence[0],
        i;

    for(i of sequence){
        if(i < min){
            min = i;
        }
        if(i > max){
            max = i;
        }
    }

    return{
        min: min,
        max: max
    };
};

var arr = [0.2, 100, -9, -33, 15];
console.log('The min and max values in (' + arr + ') are: ');
console.log(minMax(arr));