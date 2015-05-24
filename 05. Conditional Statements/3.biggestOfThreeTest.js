"use strict";

/*
 To Run these tests:
 - you should have nodeJS installed
 - you should have nodeunit installed (install via npm: npm install nodeunit -g)
 - run the test: nodeunit nameOfTheFile.js
 */

/**
 | a    | b    | c    | biggest |
 |------|------|------|:-------:|
 | 5    | 2    | 2    | 5       |
 | -2   | -2   | 1    | 1       |
 | -2   | 4    | 3    | 4       |
 | 0    | -2.5 | 5    | 5       |
 | -0.1 | -0.5 | -1.1 | -0.1    |
 */

var biggestOfThree = require("./3.biggestOfThree.js").biggestOfThree;

exports.test_5_2_2 = function(test){
    test.equal(5, biggestOfThree(5, 2, 2));
    test.done();
};

exports.test_n2_n2_1 = function(test){
    test.equal(1, biggestOfThree(-2, -2, 1));
    test.done();
};

exports.test_n2_4_3 = function(test){
    test.equal(4, biggestOfThree(-2, 4, 3));
    test.done();
};

exports.test_0_n2p5_5 = function(test){
    test.equal(5, biggestOfThree(0, -2.5, 5));
    test.done();
};

exports.test_n0p1_n0p5_n1p1 = function(test){
    test.equal(-0.1, biggestOfThree(-0.1, -0.5, -0.1));
    test.done();
};