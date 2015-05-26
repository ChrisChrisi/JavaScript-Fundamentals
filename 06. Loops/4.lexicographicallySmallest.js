"use strict";

/**
 * ### Problem 4. Lexicographically smallest ###
 *	Write a script that finds the lexicographically smallest and largest property in `document`, `window` and `navigator` objects.
 */

var lexSmall = function(){
    var docKey = Object.keys(document)[0];
    var windowKey = Object.keys(window)[0];
    var navKey = Object.keys(navigator)[0];
    var dMin = docKey,
        dMax = docKey,
        wMin = windowKey,
        wMax = windowKey,
        nMin = navKey,
        nMax = navKey,
        i;
    for( i in document){
        if( i < dMin){
            dMin = i;
        }
        if(i > dMax){
            dMax = i;
        }
    }
    for( i in window){
        if( i < wMin){
            wMin = i;
        }
        if(i > wMax){
            wMax = i;
        }
    }
    for( i in navigator){
        if( i < nMin){
            nMin = i;
        }
        if(i > nMax){
            nMax = i;
        }
    }

    return {
        documentMin: dMin,
        documentMax: dMax,
        windowMin: wMin,
        windowMax: wMax,
        navigatorMin: nMin,
        navigatorMax: nMax
    };
};

console.log(lexSmall());