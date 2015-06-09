"use strict";

/**
 * ### Problem 6. Group people
 *   Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
 *   Use **Array#reduce**
 *   Use **only array methods** and no regular loops (for, while)
 */

var groupPeople = function (arr) {
    var grouping = function (a, b) {
        var firstChar = b.firstname.charAt(0).toLowerCase();
        if (!a.hasOwnProperty(firstChar)) {
            a[firstChar] = [];
        }
        a[firstChar].push(b);
        return a;
    };
    return arr.reduce(grouping, {});
};


var people = [
    {
        firstname: "Geraldine",
        lastname: "Jonson",
        age: 25,
        gender: true
    },
    {
        firstname: "Alan",
        lastname: "Smith",
        age: 70,
        gender: false
    },
    {
        firstname: "Alice",
        lastname: "Smith",
        age: 45,
        gender: true
    },
    {
        firstname: "Jane",
        lastname: "Jonson",
        age: 33,
        gender: true
    },
    {
        firstname: "George",
        lastname: "Green",
        age: 31,
        gender: false
    }
];

console.log(groupPeople(people));