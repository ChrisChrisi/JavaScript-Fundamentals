"use strict";

/**
 * ### Problem 5. Appearance count ###
 *	Write a function that counts how many times given number appears in given array.
 *	Write a test function to check if the function is working correctly.
 */

var appCount = function(arr, num){
    var count = 0,
        i;
    if(!Array.isArray(arr)){
        arr = [];
    }
    for(i in arr){
        if(arr[i] === num){
            count += 1;
        }
    }

    return count;
};

/**
 * test function to check if the function appCount is working correctly
 */
var testAppCount = function(vals){
    var result = true,
        len = vals.length,
        i = 0;
    do{
        result = (vals[i][2] === appCount(vals[i][0], vals[i][1] ));
        i+=1;
    }while(i < len && result === true);
    return result;
};

//               [haystack, straw, count]
var testValues = [[[1, 33, 55, 1, 22],1, 2],
    [[22.5, 5, 88],22.5,1],
    [[12, 5.55, 8, 9], 2.22, 0],
    ['6, apple, 6',6, 0]
];

console.log(testAppCount(testValues));