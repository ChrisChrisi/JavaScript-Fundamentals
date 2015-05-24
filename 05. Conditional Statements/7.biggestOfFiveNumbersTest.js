"use strict";

/*
 To Run these tests:
 - you should have nodeJS installed
 - you should have nodeunit installed (install via npm: npm install nodeunit -g)
 - run the test: nodeunit nameOfTheFile.js
 */

/**
 | a    | b    | c    |  d |   e  | biggest |
 |------|------|------|:--:|:----:|---------|
 | 5    | 2    | 2    | 4  | 1    | 5       |
 | -2   | -22  | 1    | 0  | 0    | 1       |
 | -2   | 4    | 3    | 2  | 0    | 4       |
 | 0    | -2.5 | 0    | 5  | 5    | 5       |
 | -3   | -0.5 | -1.1 | -2 | -0.1 | -0.1    |
 */

var biggestOfFiveNumbers = require("./7.biggestOfFiveNumbers.js").biggestOfFiveNumbers;

exports.test_5_2_2_4_1 = function(test){
    test.equal(5, biggestOfFiveNumbers(5, 2, 2, 4, 1));
    test.done();
};

exports.test_2 = function(test){
    test.equal(1, biggestOfFiveNumbers(-2, -22, 1, 0, 0));
    test.done();
};

exports.test_3 = function(test){
    test.equal(4, biggestOfFiveNumbers(-2, 4, 3, 2, 0));
    test.done();
};

exports.test_4 = function(test){
    test.equal(5, biggestOfFiveNumbers(0, -2.5, 0, 5, 5));
    test.done();
};

exports.test_5 = function(test){
    test.equal(-0.1, biggestOfFiveNumbers(-0.5, -1.1, -2, -0.1));
    test.done();
};