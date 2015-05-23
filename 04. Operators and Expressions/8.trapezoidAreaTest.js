"use strict";

/*
 To Run these tests:
 - you should have nodeJS installed
 - you should have nodeunit installed (install via npm: npm install nodeunit -g)
 - run the test: nodeunit nameOfTheFile.js
 */

/**
 |   a   |   b   |   h   |    area   |
 |:-----:|:-----:|:-----:|:---------:|
 | 5     | 7     | 12    | 72        |
 | 2     | 1     | 33    | 49.5      |
 | 8.5   | 4.3   | 2.7   | 17.28     |
 | 100   | 200   | 300   | 45000     |
 | 0.222 | 0.333 | 0.555 | 0.1540125 |
 */

var trapezoidArea = require("./8.trapezoidArea.js").trapezoidAra;

exports.test5_7_12 = function (test) {
    test.equal(72, trapezoidArea(5, 7, 12));
    test.done();
};

exports.test2_1_33 = function (test) {
    test.equal(49.5, trapezoidArea(2, 1, 33));
    test.done();
};
exports.test8p5_4p3_2p7 = function (test) {
    test.equal(17.28, trapezoidArea(8.5, 4.3, 2.7));
    test.done();
};
exports.test100_200_300 = function (test) {
    test.equal(45000, trapezoidArea(100, 200, 300));
    test.done();
};
exports.test0p222_0p333_0p555 = function (test) {
    test.equal(0.1540125, trapezoidArea(0.222, 0.333, 0.555));
    test.done();
};