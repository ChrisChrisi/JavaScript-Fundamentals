"use strict";

/**
 * ### Problem 4. Maximal increasing sequence ###
 *    Write a script that finds the maximal increasing sequence in an array.
 */


var maxIncr = function (arr) {
    var max = 1, //length of the maximal sequence of equal elements
        cur = 1, //current length of sequence of equal elements
        maxStart = 1, // start index of the max sequence
        maxEnd = 1, // end index of the max sequence
        curStart, // start index of the current sequence
        curEnd, // end index of the current sequence
        i, // current index
        prev, // value of the previous element
        seq = [];// array of the maximal increasing sequence

    for (i in arr) {
        if (arr[i] > prev) {
            cur += 1;
            curEnd = i;
            if (max < cur) {
                max = cur;
                maxStart = curStart;
                maxEnd = curEnd;
            }
        } else {
            cur = 1;
            curStart = i;
            curEnd = i;
        }
        prev = arr[i];
    }
    if (maxEnd == arr.length - 1) {
        seq = arr.slice(maxStart);
    } else {
        seq = arr.slice(maxStart, max + 1);
    }
    return {
        "length": max,
        "sequence": seq
    };
};

console.log(maxIncr([3, 2, 3, 4, 2, 2, 4]));
console.log(maxIncr([3, 2, 3, 4, 2, 2, 4, 7, 8, 11.5]));