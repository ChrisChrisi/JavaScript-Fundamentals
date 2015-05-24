"use strict";

/**
 * ### Problem 8. Number as words ###
 *	Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.
 */

var numberAsWords = function(number){
var oneDigit = function(num){
    var answer;
    switch (num) {
        case 0:
            answer = "";
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
    }
    return answer;
};
var twoDigits = function(num){
    var answer;
    if(num < 20){
        switch (num){
            case 10:
                answer = "ten";
                break;
            case 11:
                answer = "eleven";
                break;
            case 12:
                answer = "twelve";
                break;
            case 13:
                answer = "thirteen";
                break;
            case 14:
                answer = "fourteen";
                break;
            case 15:
                answer = "fifteen";
                break;
            case 16:
                answer = "sixteen";
                break;
            case 17:
                answer = "seventeen";
                break;
            case 18:
                answer = "eighteen";
                break;
            case 19:
                answer = "nineteen";
                break;
        }
        return answer;
    } else {
        var first = num % 10;
        var tens = parseInt(num / 10) * 10;
        switch (tens){
            case 20:
                answer = "twenty";
                break;
            case 30:
                answer = "thirty";
                break;
            case 40:
                answer = "forty";
                break;
            case 50:
                answer = "fifty";
                break;
            case 60:
                answer = "sixty";
                break;
            case 70:
                answer = "seventy";
                break;
            case 80:
                answer = "eighty";
                break;
            case 90:
                answer = "ninety";
                break;
        }

        answer += ' ' + oneDigit(first);
    }
    return answer;
};
var result;
    if(parseInt(number / 100) === 0 &&  parseInt(number / 10) === 0){
        if(number === 0){result = 'zero';} else {
        result =oneDigit(number);}
    } else if(parseInt(number / 100) === 0 ){
        result = twoDigits(number);
    } else {
        var hundreds = parseInt(number / 100);
        result = oneDigit(hundreds) + ' hundred';
        if(number % 100 !== 0){
            result += ' and ' + numberAsWords(number % 100);
        }
    }
    result = result.toLowerCase();
    return result.charAt(0).toUpperCase() + result.slice(1);
};

var testValues = [0, 9, 10, 12, 19, 25, 98, 273, 400, 501, 617, 711, 999];

//testValues.forEach(function(value){
//    console.log(value + ' in words:');
//    console.log(numberAsWords(value));
//});

exports.numberAsWords = numberAsWords;