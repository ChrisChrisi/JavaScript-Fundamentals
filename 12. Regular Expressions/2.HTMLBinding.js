"use strict";

/**
 * ### Problem 2. HTML binding
 *	Write a function that puts the value of an object into the content/attributes of HTML tags.
 *	Add the function to the **String.prototype**
 */

var makeBind = function(str,options){

    function replacer(match, i, j, k) {
        match = match.substring(0, match.length - 2);
         return match + options[i] + '</';
    }

    str = str.replace(/data\-bind\-content="([^'"]+)(|[^</]+)(<\/)/, replacer);
    function replacer2(match, i, j) {
        if(i !== 'content'){
            return match + ' ' +i + '="'+ options[j]+'"';
        }
        return match ;
    }
    str = str.replace(/data\-bind\-([A-Za-z]+)=["']([^'"]+)["']/g, replacer2);
    return str;

};
String.prototype.bind = function(options){
    return makeBind(this.valueOf(), options);
};
console.log('<div data-bind-content="name"></div>'.bind({name: 'Steven'}));
console.log('<a data-bind-content="name" data-bind-href="link" data-bind-class="name" href="http://telerikacademy.com" class="Elena">Elena</а>'.bind({name: 'Elena', link: 'http://telerikacademy.com'}));
