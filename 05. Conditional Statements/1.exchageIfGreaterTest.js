"use strict";
/**
 | a    | b   | result  |
 |------|-----|---------|
 | 5    | 2   | 2 5     |
 | 3    | 4   | 3 4     |
 | 5.5  | 4.5 | 4.5 5.5 |
 */

var exhchageIfGreater = require("./1.exchangeIfGreater.js").exchangeIfGreater;

exports.test_5_2 = function(test){
    test.equal("2 5", exhchageIfGreater(5, 2));
    test.done();
};

exports.test_3_4 = function(test){
    test.equal("3 4", exhchageIfGreater(3, 4));
    test.done();
};

exports.test_5p5_4p5 = function(test){
    test.equal("4.5 5.5", exhchageIfGreater(4.5, 5.5));
    test.done();
};