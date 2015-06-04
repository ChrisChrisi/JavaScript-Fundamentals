"use strict";

/**
 * ### Problem 7. First larger than neighbours ###
 *	Write a function that returns the index of the first element in array that is larger than its neighbours or `-1`, if there’s no such element.
 *	Use the function from the previous exercise.
 */

var firstLarger = function(arr){
    var i = 1,
        result = -1;
    if(!Array.isArray(arr)){
        arr = [];
    }
    var arr_len = arr.length - 1;
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

    while(i < arr_len){
        if(largerThanNeighbours(arr,i)){
            result = i;
            break;
        }
        i+=1;
    }
    return result;
};

var arr = [1, 1, 1, 3, 2];
console.log(firstLarger(arr));

var arr = [1, 2, 1, 3, 2];
console.log(firstLarger(arr));