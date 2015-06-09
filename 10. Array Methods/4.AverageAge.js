"use strict";

/**
 * ### Problem 4. Average age of females
 *    Write a function that calculates the average age of all females, extracted from an array of persons
 *    Use **Array#filter**
 *    Use **only array methods** and no regular loops (for, while)
 */

var averageOfFemales = function (arr) {
    var filterd,
        sum,
        isFemale = function (person) {
            return person.gender;
        };
    filterd = arr.filter(isFemale);
    if (filterd.length === 0) {
        return 0;
    }
    sum = filterd.reduce(function (a, b) {
        return parseInt(a.age) + parseInt(b.age);
    });
    return sum / filterd.length;
};

var people = [
    {
        name: "Marry Jonson",
        age: 25,
        gender: true
    },
    {
        name: "Alan Smith",
        age: 55,
        gender: false
    },
    {
        name: "Jane Jonson",
        age: 33,
        gender: true
    },
    {
        name: "George Green",
        age: 70,
        gender: false
    }
];

console.log("Array of people: ");
console.log(people);
console.log("The average age of females in this array is: ");
console.log(averageOfFemales(people));