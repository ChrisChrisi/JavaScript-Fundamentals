"use strict";

var pointInCircle = require("./6.pointInCircle.js").pointInCircle;

exports.test0And1 = function(test){
    test.equal(true, pointInCircle(0, 1));
    test.done();
};
