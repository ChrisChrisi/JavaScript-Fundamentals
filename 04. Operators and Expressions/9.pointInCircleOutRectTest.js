"use strict";

var pointInCircleOutRect = require("./9.pointInCircleOutRect.js").pointInCircleOutRect;

exports.test1_2 = function (test) {
    test.equal(true, pointInCircleOutRect(1,2));
    test.done();
};