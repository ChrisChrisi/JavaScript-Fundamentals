"use strict";

/**
 *  n  | Divided by 7 and 5? |
 |:---:|:-------------------:|
 | 3   | false               |
 | 0   | true                |
 | 5   | false               |
 | 7   | false               |
 | 35  | true                |
 | 140 | true                |
 */
var divisibleBy7And5 = require("./2.divisibleBy7And5.js").divisibleBy7And5;

exports.test3 = function (test){
    test.equal(false, divisibleBy7And5(3));
    test.done();
};


exports.test0 = function(test){
    test.equal(true, divisibleBy7And5(0));
    test.done();
};

exports.test5 = function(test){
    test.equal(false, divisibleBy7And5(5));
    test.done();
};

exports.test7 = function(test){
    test.equal(false, divisibleBy7And5(7));
    test.done();
};

exports.test35 = function(test){
    test.equal(true, divisibleBy7And5(35));
    test.done();
};

exports.test140 = function(test){
    test.equal(true, divisibleBy7And5(140));
    test.done();
};