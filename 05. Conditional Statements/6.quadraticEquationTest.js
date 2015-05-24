"use strict";

/*
 To Run these tests:
 - you should have nodeJS installed
 - you should have nodeunit installed (install via npm: npm install nodeunit -g)
 - run the test: nodeunit nameOfTheFile.js
 */

/**
 |   a  |  b  |  c  |     roots     |
 |:----:|:---:|:---:|---------------|
 | 2    | 5   | -3  | x1=-3; x2=0.5 |
 | -1   | 3   | 0   | x1=3; x2=0    |
 | -0.5 | 4   | -8  | x1=x2=4       |
 | 5    | 2   | 8   | no real roots |
 */

var quadraticEquation = require("./6.quadraticEquation.js").quadraticEquation;

exports.test_2_5_n3 = function(test){
    test.deepEqual([-3, 0.5], quadraticEquation(2, 5, -3));
    test.done();
};

exports.test_n1_3_0 = function(test){
    test.deepEqual([3, 0], quadraticEquation(-1, 3, 0));
    test.done();
};

exports.test_n0p5_4_n8 = function(test){
    test.deepEqual([4, 4], quadraticEquation(-0.5, 4, -8));
    test.done();
};

exports.test_5_2_8 = function(test){
    test.equal('no real roots', quadraticEquation(5, 2, 8));
    test.done();
};
