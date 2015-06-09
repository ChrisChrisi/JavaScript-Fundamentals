"use strict";

/**
 *### Problem 5. Youngest person
 *	Write a function that finds the youngest male person in a given array of people and prints his full name
 *	Use **only array methods** and no regular loops (for, while)
 *	Use **Array#find**
 */
if (!Array.prototype.find) {
    Array.prototype.find = function(callback) {
        var i, len = this.length;
        for (i = 0; i < len; i+=1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
    };
}

var youngestPerson = function(arr){
    var sorted,
        youngest,
        isMale = function (person) {
        return !person.gender;
    };
    sorted = arr.sort(function(a, b) {
        return a.age > b.age;
    });

    youngest = sorted.find(isMale);

    console.log( youngest.firstname + ' ' + youngest.lastname);

};
var people = [
    {
        firstname: "Marry",
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

youngestPerson(people);