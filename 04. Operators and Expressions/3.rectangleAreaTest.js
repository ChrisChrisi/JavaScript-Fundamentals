"use strict";
/**
 | width | height | area |
 |:-----:|:------:|:----:|
 | 3     | 4      | 12   |
 | 2.5   | 3      | 7.5  |
 | 5     | 5      | 25   |
 */
var rectangleArea = require("./3.rectangleArea.js").rectangleArea;

exports.test3And4 = function(test){
    test.equal(12, rectangleArea(3,4));
    test.done();
};

exports.test2Dot5And3 = function(test){
    test.equal(7.5, rectangleArea(2.5,3));
    test.done();
};

exports.test5And5 = function(test){
    test.equal(25, rectangleArea(5,5));
    test.done();
};