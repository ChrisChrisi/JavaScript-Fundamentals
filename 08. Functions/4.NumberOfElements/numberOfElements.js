"use strict";

/**
 * ### Problem 4. Number of elements
 *	Write a function to count the number of `div` elements on the web page
 */

var numberOfElements = function(){
    var word = '<div',
        wordLen = word.length,
        text = document.documentElement.outerHTML,
        count = 0,
        i,
        start = 0;
    while ((i = text.indexOf(word, start)) > -1) {
        count += 1;
        start = i + wordLen;
    }

    return count;
};