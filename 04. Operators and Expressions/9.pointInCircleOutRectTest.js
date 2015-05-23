"use strict";

/*
 To Run these tests:
 - you should have nodeJS installed
 - you should have nodeunit installed (install via npm: npm install nodeunit -g)
 - run the test: nodeunit nameOfTheFile.js
 */

var pointInCircleOutRect = require("./9.pointInCircleOutRect.js").pointInCircleOutRect;

exports.test1_2 = function (test) {
    test.equal(true, pointInCircleOutRect(1,2));
    test.done();
};