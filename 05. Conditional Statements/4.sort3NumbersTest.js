"use strict";

/*
 To Run these tests:
 - you should have nodeJS installed
 - you should have nodeunit installed (install via npm: npm install nodeunit -g)
 - run the test: nodeunit nameOfTheFile.js
 */

/**
 | a    | b    | c    |     result     |
 |------|------|------|----------------|
 | 5    | 1    | 2    | 5 2 1          |
 | -2   | -2   | 1    | 1 -2 -2        |
 | -2   | 4    | 3    | 4 3 -2         |
 | 0    | -2.5 | 5    | 5 0 -2.5       |
 | -1.1 | -0.5 | -0.1 | -0.1 -0.5 -1.1 |
 | 10   | 20   | 30   | 30 20 10       |
 | 1    | 1    | 1    | 1 1 1          |
 */

var sort3Numbers = require("./4.sort3Numbers.js").sort3Numbers;

exports.test_5_1_2 = function(test){
    test.equal('5 2 1', sort3Numbers(5, 2, 1));
    test.done();
};

exports.test_n2_n2_1 = function(test){
    test.equal('1 -2 -2', sort3Numbers(-2, -2, 1));
    test.done();
};

exports.test_n2_4_3 = function(test){
    test.equal('4 3 -2', sort3Numbers(-2, 4, 3));
    test.done();
};

exports.test_0_n2p5_5 = function(test){
    test.equal('5 0 -2.5', sort3Numbers(0, -2.5, 5));
    test.done();
};

exports.test_n0p1_n0p5_n1p1 = function(test){
    test.equal('-0.1 -0.5 -1.1', sort3Numbers(-1.1, -0.5, -0.1));
    test.done();
};

exports.test_10_20_30 = function(test){
    test.equal('30 20 10', sort3Numbers(10, 20, 30));
    test.done();
};

exports.test_1_1_1 = function(test){
    test.equal('1 1 1', sort3Numbers(1, 1, 1));
    test.done();
};