"use strict";

/**
 * ### Problem 1. Exchange if greater
 *	Write an `if` statement that takes two double variables `a` and `b` and exchanges their values if the first one is greater than the second.
 *	As a result print the values `a` and `b`, separated by a space.
 */

var exchangeIfGreater = function(a, b){
  if(a > b){
      a = a + b;
      b = a - b;
      a = a - b;
  }
    return a + " " + b;
};

var testValues = [[5,2], [3, 4], [5.5, 4.5]];

//testValues.forEach(function(value){
//    console.log("Exchange if greater on " + value[0] + " and " + value[1] + ": " + exchangeIfGreater(value[0], value[1]));
//});

exports.exchangeIfGreater = exchangeIfGreater;