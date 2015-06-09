"use strict";

/**
 * ### Problem 9. Extract e-mails
 *	Write a function for extracting all email addresses from given text.
 *	All sub-strings that match the format <identifier>@<host>…<domain> should be recognized as emails.
 *	Return the emails as array of strings.
 */

var extractEmail = function(str){
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i,
    match,
    result = [];
    match = str.match(re);
    while(match !== null){
        result.push(match[0]);
        str = str.substring(match['index'] + match[0].length);
        match = str.match(re);
    }
    return result;
};

var str = "hello sdf dsf some@email.com sdefsdf dfdsf other@gfg.net dsgfdsf dsf ";

console.log(extractEmail(str));