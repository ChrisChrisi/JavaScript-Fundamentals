"use strict";

/**
 * ### Problem 2. People of age
 *    Write a function that checks if an array of person contains only people of age (with age 18 or greater)
 *    Use **only array methods** and no regular loops (for, while)
 */

var peopleOfAge = function (arr) {
    var ofAge = function (person) {
        return person.age >= 18;
    };

    return arr.every(ofAge);
};

var people = [
    {
        name: "Marry Jonson",
        age: 25,
        gender: 'f'
    },
    {
        name: "Jane Jonson",
        age: 33,
        gender: 'f'
    },
    {
        name: "Alan Smith",
        age: 55,
        gender: 'm'
    },
    {
        name: "George Green",
        age: 70,
        gender: 'm'
    }
];

var people2 = [
    {
        name: "Marry Jonson",
        age: 25,
        gender: 'f'
    },
    {
        name: "Jane Jonson",
        age: 33,
        gender: 'f'
    },
    {
        name: "Alan Smith",
        age: 15,
        gender: 'm'
    },
    {
        name: "George Green",
        age: 70,
        gender: 'm'
    }
];
console.log("Array of people: ");
console.log(people);
console.log("Are all people in the array of age? ");
console.log(peopleOfAge(people));
console.log('====================================================');

console.log("Array of people: ");
console.log(people2);
console.log("Are all people in the array of age? ");
console.log(peopleOfAge(people2));