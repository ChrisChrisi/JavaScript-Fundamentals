"use strict";

/**
 * ### Problem 6. Most frequent number ###
 *	Write a script that finds the most frequent number in an array.
 */

var mostFrequent = function (arr) {
    var max = 1, //length of the maximal sequence of equal elements
        maxVal = arr[0], // the element of which the the maximal sequence is made
        count = {},
        i;
    for (i in arr) {
        if(!count[arr[i]]){
            count[arr[i]] = 0;
        }
        count[arr[i]] +=1;
        if(count[arr[i]] > max){
            max = count[arr[i]];
            maxVal = arr[i];
        }
    }
    return {
        "count": max,
        "element": maxVal
    };
};
var arrayTest = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
var result = mostFrequent(arrayTest);
console.log('The most frequent number in the array ['+arrayTest+'] is ' + result.element +': ' + result.count + ' times');