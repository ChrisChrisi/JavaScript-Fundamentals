"use strict";

/**
 * ### Problem 1. English digit ###
 *	Write a function that returns the last digit of given integer as an English word.
 */

var englishDigit = function(number){
    var answer,
        lastDigit = number % 10;
    switch (lastDigit) {
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

var values = [512, 1024, 12309, [1, 2], 'apple'];

values.forEach(function(val){
    console.log('The last digit of '+ val + ' is: ');
    console.log(englishDigit(val));
});