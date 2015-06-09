"use strict";

/**
 * ### Problem 8. Replace tags
 *	Write a JavaScript function that replaces in a HTML document given as string all the tags `<a href="…">…</a>` with corresponding tags `[URL=…]…/URL]`.
 */

var replaceTags = function(str){
    str = str.replace(/(<a\s(|\s)+href=('|"))/gm,"[URL=");
    str = str.replace(/(URL=[a-zA-Z./:]+)(['"]>)/gm,"$1]");
    str = str.replace(/(<\/a(|\s)+>)/gm,"[/URL]");
    return str;
};
var str = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a > to discuss the courses.</p>';
console.log(replaceTags(str));