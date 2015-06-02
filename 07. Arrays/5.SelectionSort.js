"use strict";

/**
 * ### Problem 5. Selection sort ###
 *    Sorting an array means to arrange its elements in increasing order.
 *    Write a script to sort an array.
 *    Use the selection sort algorithm:
 *    Find the smallest element, move it at the first position,
 *    find the smallest from the rest, move it at the second position, etc.

 _Hint: Use a second array_
 */

var smallest = function (arr) {
    var i,
        minIndex = 0,
        minVal = arr[0];
    for (i in arr) {
        if (arr[i] < minVal) {
            minVal = arr[i];
            minIndex = i;

        }
    }
    return minIndex;
};
var selectionSort = function (arr) {
    var sortArr = [],
        index;
    while (arr.length > 0) {
        index = smallest(arr);
        sortArr.push(arr[index]);
        arr.splice(index, 1);
    }
    return sortArr;
};

var testValues = [[64, 25, 12, 22, 11],
                  [5, 1, 12, -5, 16, 2, 12, 14]];

testValues.forEach(function(value){
    console.log('Sorted ['+value + '] is:');
    console.log(selectionSort(value));
});