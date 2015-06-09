"use strict";

/**
 * ### Problem 3. Sub-string in text
 *	Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).

 * _Example:_

 * The target sub-string is `in`

 * The text is as follows:
 * We are liv**in**g **in** an yellow submar**in**e. We don't have anyth**in**g else. **in**side the submar**in**e is very tight. So we are dr**in**k**in**g all the day. We will move out of it **in** 5 days.

 * The result is: `9`
 */

var substringCount = function(str, elem){
    var i = str.indexOf(elem),
        count = 0;
    while( i > -1 ){
        count += 1;
        i = str.indexOf(elem, i + 1);
    }

    return count;
};

var str = "We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.";
console.log(substringCount(str, 'in'));