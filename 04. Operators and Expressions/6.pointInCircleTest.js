"use strict";

/*
 To Run these tests:
 - you should have nodeJS installed
 - you should have nodeunit installed (install via npm: npm install nodeunit -g)
 - run the test: nodeunit nameOfTheFile.js
 */

var pointInCircle = require("./6.pointInCircle.js").pointInCircle;

exports.test0And1 = function(test){
    test.equal(true, pointInCircle(0, 1));
    test.done();
};
