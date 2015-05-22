"use strict";

/**
 * ### Problem 9. Point in Circle and outside Rectangle
 *    Write an expression that checks for given point `P(x, y)` if it is within the circle `K( (1,1), 3)`
 *    and out of the rectangle `R(top=1, left=-1, width=6, height=2)`.
 */
//  dist = math.sqrt((center_x - x) ** 2 + (center_y - y) ** 2)
var pointInCircle = function (x, y) {

    var x_center = 1;
    var y_center = 1;
    var r = 3;

    return (Math.pow((x_center - x), 2) + Math.pow((y_center - y), 2)) <= Math.pow(r, 2);

};

var pointOutsideRectangle = function(x, y){
    var rect_top_border  = 1,
        rect_left_border  = -1,
        rect_width = 6,
        rect_height = 2;
    var rect_bottom_border = rect_top_border -  rect_height;
    var rect_right_border = rect_left_border + rect_width;
    return !(x >= rect_left_border &&
             x <= rect_right_border &&
             y <= rect_top_border &&
             y >= rect_bottom_border);
};

var pointInCircleOutRect = function (x, y) {
    return (pointInCircle(x, y) && pointOutsideRectangle(x, y));
};

exports.pointInCircleOutRect = pointInCircleOutRect;