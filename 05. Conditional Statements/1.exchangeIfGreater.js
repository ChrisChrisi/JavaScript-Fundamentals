"use strict";

/**
 * ### Problem 1. Exchange if greater
 *	Write an `if` statement that takes two double variables `a` and `b` and exchanges their values if the first one is greater than the second.
 *	As a result print the values `a` and `b`, separated by a space.
 */

var exchangeIfGreater = function(a, b){
  if(a > b){
      a = a + b;  // x now becomes 15
      b = a - b;  // y becomes 10
      a = a - b;  // x becomes 5
  }
    return a + " " + b;
};

exports.exchangeIfGreater = exchangeIfGreater;