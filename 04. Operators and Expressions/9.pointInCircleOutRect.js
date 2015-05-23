"use strict";

/**
 * ### Problem 9. Point in Circle and outside Rectangle
 *    Write an expression that checks for given point `P(x, y)` if it is within the circle `K( (1,1), 3)`
 *    and out of the rectangle `R(top=1, left=-1, width=6, height=2)`.
 */
var pointInCircle = function (x, y) {

    var x_center = 1,
        y_center = 1,
        r = 3;

    return (Math.pow((x_center - x), 2) + Math.pow((y_center - y), 2)) <= Math.pow(r, 2);

};

var pointOutsideRectangle = function (x, y) {
    var rect_top_border = 1,
        rect_left_border = -1,
        rect_width = 6,
        rect_height = 2;
    var rect_bottom_border = rect_top_border - rect_height;
    var rect_right_border = rect_left_border + rect_width;
    return !(x >= rect_left_border &&
    x <= rect_right_border &&
    y <= rect_top_border &&
    y >= rect_bottom_border);
};

var pointInCircleOutRect = function (x, y) {
    return (pointInCircle(x, y) && pointOutsideRectangle(x, y));
};

var testValues = [[1, 2], [2.5, 2], [0, 1], [2, 0], [4, 0], [2.5, 1.5], [2, 1.5], [1, 2.5], [-100, -100]];

//testValues.forEach(function(value){
//    console.log("Is point P("+value[0]+", "+value[1]+") within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2)?");
//    console.log(pointInCircleOutRect(value[0], value[1]));
//});

exports.pointInCircleOutRect = pointInCircleOutRect;