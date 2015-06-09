"use strict";

/**
 * ### Problem 11. String format
 *	Write a function that formats a string using placeholders.
 *	The function should work with up to 30 placeholders and all types.

 _Examples:_

 var str = stringFormat('Hello {0}!', 'Peter');
 //str = 'Hello Peter!';

 var frmt = '{0}, {1}, {0} text {2}';
 var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
 //str = '1, Pesho, 1 text Gosho'
 */


var stringFormat = function(str){
    var args = arguments;
    function replacer(match, i) {
        var index = (1 + parseInt(i)).toString();
        return args[index];
    }
    str = str.replace(/{([0-9]+)}/gm, replacer);
    return str;
};

console.log(stringFormat('Hello {0}!', 'Peter'));
var frmt = '{0}, {1}, {0} text {2}';
console.log(stringFormat(frmt, 1, 'Pesho', 'Gosho'));