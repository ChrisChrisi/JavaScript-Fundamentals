"use strict";
/*
To Run these tests:
    - you should have nodeJS installed
    - you should have nodeunit installed (install via npm: npm install nodeunit -g)
    - run the test: nodeunit nameOfTheFile.js
 */
/**
 |  n |  Odd? |
 |:--:|:-----:|
 | 3  | true  |
 | 2  | false |
 | -2 | false |
 | -1 | true  |
 | 0  | false |
 */
var checkOdd = require("./1.checkOdd.js").checkOdd;
exports.testOdd3 = function (test) {
    test.equal(true, checkOdd(3));
    test.done();
};

exports.testOdd2 = function (test) {
    test.equal(false, checkOdd(2));
    test.done();
};

exports.testOddNeg2 = function (test) {
    test.equal(false, checkOdd(-2));
    test.done();
};


exports.testOddNeg1 = function (test) {
    test.equal(true, checkOdd(-1));
    test.done();
};

exports.testOdd0 = function (test) {
    test.equal(false, checkOdd(0));
    test.done();
}