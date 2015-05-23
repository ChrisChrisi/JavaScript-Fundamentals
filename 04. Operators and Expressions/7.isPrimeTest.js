"use strict";

/*
 To Run these tests:
 - you should have nodeJS installed
 - you should have nodeunit installed (install via npm: npm install nodeunit -g)
 - run the test: nodeunit nameOfTheFile.js
 */

/**
 |  n | Prime? |
 |:--:|:------:|
 | 1  | false  |
 | 2  | true   |
 | 3  | true   |
 | 4  | false  |
 | 9  | false  |
 | 37 | true   |
 | 97 | true   |
 | 51 | false  |
 | -3 | false  |
 | 0  | false  |
 */
var isPrime = require("./7.isPrime.js").isPrime;

exports.test1 = function (test) {
    test.equal(false, isPrime(1));
    test.done();
};

exports.test2 = function (test) {
    test.equal(true, isPrime(2));
    test.done();
};

exports.test3 = function (test) {
    test.equal(true, isPrime(3));
    test.done();
};

exports.test4 = function (test) {
    test.equal(false, isPrime(4));
    test.done();
};

exports.test9 = function (test) {
    test.equal(false, isPrime(9));
    test.done();
};
exports.test37 = function (test) {
    test.equal(true, isPrime(37));
    test.done();
};
exports.test97 = function (test) {
    test.equal(true, isPrime(97));
    test.done();
};

exports.test51 = function (test) {
    test.equal(false, isPrime(51));
    test.done();
};

exports.testminus3 = function (test) {
    test.equal(false, isPrime(-1));
    test.done();
};

exports.test0 = function (test) {
    test.equal(false, isPrime(0));
    test.done();
};