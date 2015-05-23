"use strict";

/**
 * ### Problem 6. Point in Circle
 *    Write an expression that checks if given point `P(x,  y)` is within a circle `K({0,0}, 5)`.
 */

var pontInCircle = function(x, y){
    return (Math.pow(x, 2) + Math.pow(y, 2)) < 25;
};

var testPoints = [[0,1], [-2, 0], [-1,2], [1.5, -1], [-1.5, -1.5], [100, -30], [0, 0], [0.2, -0.8], [0.9, -1.93], [1, 1.655]];

//testPoints.forEach(function(point){
//    console.log("Is the point P("+point[0]+", "+point[1]+") withing the circle K({0,0}, 5)?");
//    console.log(pontInCircle(point[0],point[1]));
//});

exports.pointInCircle = pontInCircle;