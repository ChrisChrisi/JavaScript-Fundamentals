"use strict";

var generateList = function (list, tmpl) {
    var result = '<ul>';
    var item;
    list.forEach(function (elem) {
        function replacer(match, i) {
            i = i.substring(2, i.length - 2);
            return elem[i];
        }

        item = '<li>' + tmpl.replace(/(\-{[^{}]+}\-)/gm, replacer) + '</li>';
        result += item;
    });
    result += '</ul>';
    return result;
};

var people = [
        {name: 'Peter', age: 14},
        {name: 'Anna', age: 19},
        {name: 'George', age: 36},
        {name: 'Max', age: 20}
    ]
    ;
var tmpl = '<strong>-{name}-</strong> <span>-{age}-</span>';
console.log(generateList(people, tmpl));

