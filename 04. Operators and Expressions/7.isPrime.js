"use strict";


var isPrime = function (number) {
    if (number !== Math.round(number) || number < 2) {
        return false;
    }
    var result = true;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            result = false;
            break;
        }
    }

    return result;
};

/**
 |  n | Prime? |
 |:--:|:------:|
 | 1  | false  |
 | 2  | true   |
 | 3  | true   |
 | 4  | false  |
 | 9  | false  |
 | 37 | true   |
 | 97 | true   |
 | 51 | false  |
 | -3 | false  |
 | 0  | false  |
 */

var testNumbers = [1, 2, 3, 4, 9, 37, 97, 51, -3, 0];

//testNumbers.forEach(function(number){
//    console.log("Is the number "+ number+" prime ?");
//    console.log(isPrime(number));
//});

exports.isPrime = isPrime;