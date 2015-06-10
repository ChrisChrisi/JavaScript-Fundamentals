"use strict";

/**
 * ### Problem 1. Format with placeholders
 *    Write a function that formats a string. The function should have placeholders, as shown in the example
 *    Add the function to the **String.prototype**
 *    var options = {name: 'John', age: 13};<br/>'My name is #{name} and I am #{age}-years-old').format(options);|'My name is John and I am 13-years-old' |

 */

var formatPlace = function (options, str) {

    function replacer(match, i) {
        i = i.substring(2, i.length - 1);
        return options[i];
    }

    return str.replace(/(#{[^{}]+})/gm, replacer);
};

String.prototype.format = function(options){
    return formatPlace(options, this.valueOf());
};

var options = {name: 'John'};
console.log('Hello, there! Are you #{name}?'.format(options));
var options1 = {name: 'John', age: 13};
console.log('My name is #{name} and I am #{age}-years-old'.format(options1));