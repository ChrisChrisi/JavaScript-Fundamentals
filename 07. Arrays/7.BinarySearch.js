"use strict";

/**
 * ### Problem 7. Binary search ###
 *    Write a script that finds the index of given element in a sorted array of integers by using the
 *    [binary search](http://en.wikipedia.org/wiki/Binary_search_algorithm) algorithm.
 */

//findIndex([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 20);

var binarySearch = function (arr, elem) {
    var minI = 0,
        maxI = arr.length - 1,
        midI = parseInt((maxI - minI) / 2);
    do {
        if(arr[minI] === elem){
            midI = minI;
            break;
        }
        if(arr[maxI] === elem){
            midI = maxI;
            break;
        }
        if (elem < arr[midI]) {
            maxI = midI;
            midI = parseInt(minI + (maxI - minI) / 2);
        } else {
            minI = midI;
            midI = parseInt(minI + (maxI - minI) / 2);
        }
    }while (arr[midI] !== elem && ( maxI - minI > 1));

    return arr[midI] == elem ? midI : -1;
};

console.log('The position of 20 in the array ['+[1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24]+'] is: ' +binarySearch([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 20));
console.log('The position of 4 in the array ['+[4,14]+'] is: ' +binarySearch([4,14], 4));
console.log('The position of 4 in the array ['+[14,4]+'] is: ' +binarySearch([14,4], 4));
console.log('The position of 4 in the array ['+[14,74]+']  is: ' +binarySearch([14,74], 4));
console.log('The position of 4 in the array ['+[4]+'] is: ' +binarySearch([4], 4));
console.log('The position of 4 in the array ['+[14]+'] is: ' +binarySearch([14], 4));