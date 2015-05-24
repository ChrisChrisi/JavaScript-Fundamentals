"use strict";

/*
 To Run these tests:
 - you should have nodeJS installed
 - you should have nodeunit installed (install via npm: npm install nodeunit -g)
 - run the test: nodeunit nameOfTheFile.js
 */

/**
 | digit | result      |
 |-------|-------------|
 | 2     | two         |
 | 1     | one         |
 | 0     | zero        |
 | 5     | five        |
 | -0.1  | not a digit |
 | hi    | not a digit |
 | 9     | nine        |
 | 10    | not a digit |
 */

var digitAsWord = require("./5.digitAsWord.js").digitAsWord;

exports.test_2 = function(test){
    test.equal('two', digitAsWord(2));
    test.done();
};
exports.test_1 = function(test){
    test.equal('one', digitAsWord(1));
    test.done();
};
exports.test_0 = function(test){
    test.equal('zero', digitAsWord(0));
    test.done();
};
exports.test_5 = function(test){
    test.equal('five', digitAsWord(5));
    test.done();
};
exports.test_n0p1 = function(test){
    test.equal('not a digit', digitAsWord(-0.1));
    test.done();
};
exports.test_hi = function(test){
    test.equal('not a digit', digitAsWord('hi'));
    test.done();
};
exports.test_9 = function(test){
    test.equal('nine', digitAsWord(9));
    test.done();
};
exports.test_10 = function(test){
    test.equal('not a digit', digitAsWord(10));
    test.done();
};