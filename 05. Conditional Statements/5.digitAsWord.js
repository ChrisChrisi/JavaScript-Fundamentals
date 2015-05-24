"use strict";

/**
 * ### Problem 5. Digit as word ###
 *    Write a script that asks for a digit `(0-9)`, and depending on the input, shows the digit as a word (in English).
 *    Print `“not a digit”` in case of invalid input.
 *    Use a `switch` statement.
 */

var digitAsWord = function (digit) {
    var answer;
    switch (digit) {
        case 0:
            answer = "zero";
            break;
        case 1:
            answer = "one";
            break;
        case 2:
            answer = "two";
            break;
        case 3:
            answer = "three";
            break;
        case 4:
            answer = "four";
            break;
        case 5:
            answer = "five";
            break;
        case 6:
            answer = "six";
            break;
        case 7:
            answer = "seven";
            break;
        case 8:
            answer = "eight";
            break;
        case 9:
            answer = "nine";
            break;
        default :
            answer = "not a digit";
            break;
    }
    return answer;
};


var testValues = [2, 1, 0, 5, -0.1, 'hi', 9, 10];

//testValues.forEach(function(value){
//    console.log('Word representation of '+ value + ':');
//    console.log(digitAsWord(value));
//});

exports.digitAsWord = digitAsWord;