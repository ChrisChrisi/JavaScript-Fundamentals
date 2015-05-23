"use strict";

/*
 To Run these tests:
 - you should have nodeJS installed
 - you should have nodeunit installed (install via npm: npm install nodeunit -g)
 - run the test: nodeunit nameOfTheFile.js
 */

/**
 |    n    | Third digit 7? |
 |:-------:|:--------------:|
 | 5       | false          |
 | 701     | true           |
 | 1732    | true           |
 | 9703    | true           |
 | 877     | false          |
 | 777877  | false          |
 | 9999799 | true           |
 */

var thirdDigit = require("./4.thirdDigit.js").thirdDigit;

exports.test5 = function(test){
    test.equal(false, thirdDigit(5));
    test.done();
};

exports.test701 = function(test){
    test.equal(true, thirdDigit(701));
    test.done();
};

exports.test1732 = function(test){
    test.equal(true, thirdDigit(1732));
    test.done();
};

exports.test9703 = function(test){
    test.equal(true, thirdDigit(9703));
    test.done();
};

exports.test877 = function(test){
    test.equal(false, thirdDigit(877));
    test.done();
};

exports.test777877 = function(test){
    test.equal(false, thirdDigit(777877));
    test.done();
};

exports.test9999799 = function(test){
    test.equal(true, thirdDigit(9999799));
    test.done();
};