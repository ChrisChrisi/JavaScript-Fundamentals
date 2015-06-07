"use strict";

/**
 * ### Problem 5. Youngest person
 *    Write a function that finds the youngest person in a given array of people and prints his/hers full name
 *    Each person has properties firstname, lastname and age.

 _Example:_

 var people = [
 { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
 { firstname : 'Bay', lastname: 'Ivan', age: 81},… ];
 */

var youngestPerson = function (people) {
    var min = people[0]['age'],
        person = people[0],
        i;
    for(i in people){
        if(people[i]['age'] < min){
            min = people[i]['age'];
            person = people[i];
        }
    }
    console.log( person.firstname + ' ' + person.lastname);
};


var people = [
    {firstname: 'Gosho', lastname: 'Petrov', age: 32},
    {firstname: 'Bay', lastname: 'Ivan', age: 81},
    {firstname: 'Bay', lastname: 'Tisho', age: 20},
    {firstname: 'Bay', lastname: 'Pesho', age: 72}
];
console.log("All peoples: ");
console.log(people);
console.log("The youngest of them is: ");
youngestPerson(people);
