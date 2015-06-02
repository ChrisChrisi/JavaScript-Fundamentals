"use strict";

/**
 * ### Problem 3. Maximal sequence ###
 *    Write a script that finds the **maximal sequence** of equal elements in an array.

 */

var maxSeq = function (arr) {
    var max, //length of the maximal sequence of equal elements
        cur = 1, //current length of sequence of equal elements
        maxVal = arr[0], // the element of which the the maximal sequence is made
        i,
        prev;
    if (arr.length === 0) {
        max = 0;
    } else {
        max = 1; //length of the maximal sequence of equal elements
    }
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


var result,
    testValues = [[2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
        [2, 1, 1, 2, 3, 3, 2, 2, 2, 1, 3, 3, 3, 3, 3],
        [2],
        []];
testValues.forEach(function (value) {
    result = maxSeq(value);
    console.log('Maximal increasing sequence of equal elements in [' + value + '] consists of:');
    console.log(result.element + ' repeated ' + result.length + ' times');
});