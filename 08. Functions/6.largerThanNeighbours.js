"use strict";

/**
 * ### Problem 6. Larger than neighbours
 *	Write a function that checks if the element at given position in given array of integers is bigger than its
 *	two neighbours (when such exist).
 */

var largerThanNeighbours = function(arr, index){
    if(!Array.isArray(arr)){
        arr = [];
    }
    var arr_len = arr.length;
    if(index === 0 || index === (arr_len - 1)  || index > (arr_len - 1) ||  index < 0){
        return false;
    }

    return (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]);
};


var arr = [1, 2, 1, 2, 3, 55, 3];

console.log(largerThanNeighbours(arr, 0));
console.log(largerThanNeighbours(arr, 1));
console.log(largerThanNeighbours(arr, 2));