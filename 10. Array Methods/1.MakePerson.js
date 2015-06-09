"use strict";

/**
 * ### Problem 1. Make person
 *    Write a function for creating persons.
 *    Each person must have **firstname**, **lastname**, **age** and **gender** (true is female, false is male)
 *    Generate an array with ten person with different names, ages and genders
 */

if (!Array.prototype.fill) {
    Array.prototype.fill = function (callback) {
        var i, len = this.length;
        for (i = 0; i < len; i += 1) {
            this[i] = arguments[0];
        }
        return this;
    };
}


var makePerson = function (firstname, lastname, age, gender) {
    return {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender
    };
};

var firstnames = ["Ann", "Merry", "John", "Paul"];
var lastnames = ["Jonson", "Goldberg", "Smith", "Goldberg"];
var ages = [15, 55, 29, 70];
var genders = [true, true, false, false];

var arr = [];
arr[3] = undefined;
arr.fill(1);

arr.forEach(function (item, index) {
    arr[index] = makePerson(firstnames[index], lastnames[index], ages[index], genders[index]);
});
console.log(arr);

