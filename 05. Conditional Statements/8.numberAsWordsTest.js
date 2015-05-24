"use strict";

/*
 To Run these tests:
 - you should have nodeJS installed
 - you should have nodeunit installed (install via npm: npm install nodeunit -g)
 - run the test: nodeunit nameOfTheFile.js
 */

/**
 | numbers | number as words               |
 |---------|-------------------------------|-
 | 0       | Zero                          |
 | 9       | Nine                          |
 | 10      | Ten                           |
 | 12      | Twelve                        |
 | 19      | Nineteen                      |
 | 25      | Twenty five                   |
 | 98      | Ninety eight                  |
 | 98      | Ninety eight                  |
 | 273     | Two hundred and seventy three |
 | 400     | Four hundred                  |
 | 501     | Five hundred and one          |
 | 617     | Six hundred and seventeen     |
 | 711     | Seven hundred and eleven      |
 | 999     | Nine hundred and ninety nine  |
 */

var numberAsWords = require("./8.numberAsWords.js").numberAsWords;

exports.test1 = function(test){
    test.equal('Zero', numberAsWords(0));
    test.done();
};

exports.test2 = function(test){
    test.equal('Nine', numberAsWords(9));
    test.done();
};

exports.test3 = function(test){
    test.equal('Ten', numberAsWords(10));
    test.done();
};

exports.test4 = function(test){
    test.equal('Twelve', numberAsWords(12));
    test.done();
};

exports.test5 = function(test){
    test.equal('Nineteen', numberAsWords(19));
    test.done();
};

exports.test6 = function(test){
    test.equal('Twenty five', numberAsWords(25));
    test.done();
};

exports.test7 = function(test){
    test.equal('Ninety eight', numberAsWords(98));
    test.done();
};

exports.test8 = function(test){
    test.equal('Two hundred and seventy three', numberAsWords(273));
    test.done();
};

exports.test9 = function(test){
    test.equal('Four hundred', numberAsWords(400));
    test.done();
};

exports.test10 = function(test){
    test.equal('Two hundred and seventy three', numberAsWords(273));
    test.done();
};

exports.test11 = function(test){
    test.equal('Five hundred and one', numberAsWords(501));
    test.done();
};

exports.test12 = function(test){
    test.equal('Six hundred and seventeen', numberAsWords(617));
    test.done();
};

exports.test13 = function(test){
    test.equal('Seven hundred and eleven', numberAsWords(711));
    test.done();
};

exports.test14 = function(test){
    test.equal('Nine hundred and ninety nine', numberAsWords(999));
    test.done();
};