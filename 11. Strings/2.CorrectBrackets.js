"use strict";

/**
 * ### Problem 2. Correct brackets
 *	Write a JavaScript function to check if in a given expression the brackets are put correctly.

 * _Example of correct expression:_ `((a+b)/5-d)`.
 * _Example of incorrect expression:_ `)(a+b))`.
 */

var correctBrackets = function(str){
    var lCount = 0,
        rCount = 0,
        i = 0,
        length = str.length,
        strArr = str.split('');
    while(rCount <= lCount && i < length ){
        if(strArr[i] === "("){
            lCount += 1;
        } else if(strArr[i] === ")"){
            if(lCount > 0){
                lCount -=1;
            } else {
                rCount +=1;
            }
        }
        i+=1;
    }
    return (lCount === 0 && rCount === 0);
};

console.log(correctBrackets('((a+b)/5-d)'));
console.log(correctBrackets(')(a+b))'));