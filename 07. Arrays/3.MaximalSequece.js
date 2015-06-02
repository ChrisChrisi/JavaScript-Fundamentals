"use strict";

/**
 * ### Problem 3. Maximal sequence ###
 *    Write a script that finds the **maximal sequence** of equal elements in an array.

 _Example:_

 |              input               | result  |
 |----------------------------------|---------|
 | 2, 1, 1, 2, 3, 3, **2, 2, 2**, 1 | 2, 2, 2 |
 */

var maxSeq = function (arr) {
    var max = 1, //length of the maximal sequence of equal elements
        cur = 1, //current length of sequence of equal elements
        maxVal = arr[0], // the element of which the the maximal sequence is made
        i,
        prev;
    for (i in arr) {
        if (arr[i] === prev) {
            cur += 1;
            if (max < cur) {
                max = cur;
                maxVal = arr[i];
            }
        } else {
            cur = 1;
        }
        prev = arr[i];
    }
    return {
        "length": max,
        "element": maxVal
    };
};


console.log(maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1, 3, 3, 3, 3, 3]));
console.log(maxSeq([2]));