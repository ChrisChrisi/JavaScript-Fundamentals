"use strict";

/**
 * ### Problem 7. Parse URL
 *	Write a script that parses an URL address given in the format: `[protocol]://[server]/[resource]`
 *  and extracts from it the `[protocol]`, `[server]` and `[resource]` elements.
 *	Return the elements in a JSON object.
 */

var parseURL = function(str){
    var result = {},
        cur;
    cur = str.split("://");
    result["protocol"] = cur[0];
    if(!cur[1]){
        return result;
    }
    cur = cur[1];
    cur = cur.split('/');
    result["server"] = cur[0];
    if(!cur[1]  || cur[1] == ""){
        return result;
    }
    cur.shift();
    result["resource"] = cur.join("/");
    return result;
};

var url = "http://telerikacademy.com/Courses/Courses/Details/239";
console.log(parseURL(url));