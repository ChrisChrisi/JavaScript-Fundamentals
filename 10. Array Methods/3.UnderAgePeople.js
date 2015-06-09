"use strict";

/**
 * ### Problem 3. Underage people
 *	Write a function that prints all underaged persons of an array of person
 *	Use **Array#filter** and **Array#forEach**
 *	Use **only array methods** and no regular loops (for, while)
 */

var underAgePeople = function(arr){
    var underAge = function (person) {
        return person.age < 18;
    };

    var printPerson = function(person){
        console.log("");
        console.log("name: " + person.name + "; age: " + person.age + "; gender: " + person.gender);
    };

    arr.filter(underAge).forEach(printPerson);
};

var people = [
    {
        name: "Marry Jonson",
        age: 25,
        gender: 'f'
    },
    {
        name: "Jane Jonson",
        age: 13,
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

underAgePeople(people);