"use strict";

/**
 * ### Problem 1. Planar coordinates
 *    Write functions for working with shapes in standard Planar coordinate system.
 *    **Points** are represented by coordinates P(X, Y)
 *    **Lines** are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
 *    Calculate the distance between two points.
 *    Check if three segment lines can form a triangle.
 */

/**
 * calculates the dostance between two points
 *
 * @param point1 : object with properties 'x' and 'y'
 * @param point2 : object with properties 'x' and 'y'
 * @returns {number}
 */
var pointsDistance = function (point1, point2) {
    return Math.sqrt((point2.y - point1.y) * (point2.y - point1.y) + (point2.x - point1.x) * (point2.x - point1.x));
};

/**
 * checks if two points are equal
 *
 * @param point1 : object with properties 'x' and 'y'
 * @param point2 : object with properties 'x' and 'y'
 * @returns {boolean}
 */
var comparePoints = function (point1, point2) {
    return point1.x === point2.x && point1.y === point2.y;
};
/**
 * calculates if a triangle can be made from the three given lines
 * @param line1
 * @param line2
 * @param line3
 * @returns {boolean}
 */
var canFormTriangle = function (line1, line2, line3) {
    var i,
        j,
        isUnique,
        allPoints = [line1.point1, line1.point2, line2.point1, line2.point2, line3.point1, line3.point2];

    // get all non repeating points
    var uniquePoints = [];
    for(i in allPoints){
        isUnique = true;
        for(j in uniquePoints){
            if(comparePoints(allPoints[i], uniquePoints[j])){
                isUnique = false;
            }
        }
        if(isUnique){
            uniquePoints.push(allPoints[i]);
        }
    }

    // if the non repeating points are not 3, a triangle cannot be formed
    if (uniquePoints.length !== 3) {
        return false;
    }

    return (uniquePoints[1].y - uniquePoints[0].y) / (uniquePoints[1].x - uniquePoints[0].x) !== (uniquePoints[2].y - uniquePoints[1].y) / (uniquePoints[2].x - uniquePoints[1].x);
};

var points = [
    {
        x: 11,
        y: 2
    },
    {
        x: 22,
        y: 3
    },
    {
        x: 3,
        y: 4
    },
    {
        x: 4,
        y: 7
    },
    {
        x: 8,
        y: 2
    },
    {
        x: 1,
        y: 9
    }
];

var lines1 = [
    {
        point1: points[0],
        point2: points[1]
    },
    {
        point1: points[1],
        point2: points[2]
    },
    {
        point1: points[2],
        point2: points[0]
    }
];

var lines2 = [
    {
        point1: points[0],
        point2: points[1]
    },
    {
        point1: points[2],
        point2: points[3]
    },
    {
        point1: points[4],
        point2: points[2]
    }
];
console.log('Distance between P1('+ points[0]['x']+', ' +points[0]['y'] +') and P2('+ points[0]['x']+', ' +points[0]['y'] +'): '+pointsDistance(points[0], points[0]));
console.log('Distance between P1('+ points[0]['x']+', ' +points[0]['y'] +') and P2('+ points[2]['x']+', ' +points[2]['y'] +'): '+pointsDistance(points[0], points[2]));

console.log(canFormTriangle(lines1[0],lines1[1], lines1[2] ));
console.log(canFormTriangle(lines2[0],lines2[1], lines2[2] ));