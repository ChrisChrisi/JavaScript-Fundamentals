"use strict";

/**
 |   n   | binary representation | bit #3 |
 |:-----:|:---------------------:|:------:|
 | 5     | 00000000 00000101     | 0      |
 | 8     | 00000000 00001000     | 1      |
 | 0     | 00000000 00000000     | 0      |
 | 15    | 00000000 00001111     | 1      |
 | 5343  | 00010100 11011111     | 1      |
 | 62241 | 11110011 00100001     | 0      |
 */

var thirdBit = require("./5.thirdBit.js").thirdBit;

exports.test5 = function(test){
    test.equal(0, thirdBit(5));
    test.done();
};

exports.test8 = function(test){
    test.equal(1, thirdBit(8));
    test.done();
};

exports.test0 = function(test){
    test.equal(0, thirdBit(0));
    test.done();
};

exports.test15 = function(test){
    test.equal(1, thirdBit(15));
    test.done();
};

exports.test5343 = function(test){
    test.equal(1, thirdBit(5343));
    test.done();
};

exports.test62241 = function(test){
    test.equal(0, thirdBit(62241));
    test.done();
};