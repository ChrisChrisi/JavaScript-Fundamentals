"use strict";

/*
 To Run these tests:
 - you should have nodeJS installed
 - you should have nodeunit installed (install via npm: npm install nodeunit -g)
 - run the test: nodeunit nameOfTheFile.js
 */

/**
 | a    | b    | c    | result |
 |------|------|------|:------:|
 | 5    | 2    | 2    | +      |
 | -2   | -2   | 1    | +      |
 | -2   | 4    | 3    | -      |
 | 0    | -2.5 | 4    | 0      |
 | -1   | -0.5 | -5.1 | -      |
 */

var multiplicationSign = require("./2.multiplicationSign.js").multiplicationSign;

exports.test_5_2_2 = function(test){
    test.equal('+', multiplicationSign(5, 2, 2));
    test.done();
};

exports.test_n2_n2_1 = function(test){
    test.equal('+', multiplicationSign(-2, -2, 1));
    test.done();
};

exports.test_n2_4_3 = function(test){
    test.equal('-', multiplicationSign(-2, 4, 3));
    test.done();
};

exports.test_0_n2p5_4 = function(test){
    test.equal('0', multiplicationSign(0, -2.5, 4));
    test.done();
};

exports.test_n1_n0p5_n5p1 = function(test){
    test.equal('-', multiplicationSign(-1, -0.5, -5.1));
    test.done();
};
