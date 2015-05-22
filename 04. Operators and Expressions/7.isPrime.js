"use strict";


var isPrime = function(number){
    if(number !== Math.round(number) || number < 2){
        return false;
    }
    var result = true;
    for(var i = 2; i<= Math.sqrt(number); i++){
        if(number % i === 0){
            result = false;
            break;
        }
    }

    return result;
};

exports.isPrime = isPrime;