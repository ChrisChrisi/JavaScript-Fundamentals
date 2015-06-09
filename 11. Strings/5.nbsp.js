"use strict";

/**
 * ### Problem 5. nbsp
 *	Write a function that replaces non breaking white-spaces in a text with `&nbsp`;
 */

var nbsp = function(text){
    return text.split(' ').join('&nbsp');
};

var text = "We  are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.";

console.log(nbsp(text));