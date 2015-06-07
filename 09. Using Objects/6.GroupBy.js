"use strict";

/**
 * ### Problem 6.
 *    Write a function that groups an array of people by age, first or last name.
 *    The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
 *    Use function overloading (i.e. just one function)

 _Example:_

 var people = {…};
 var groupedByFname = group(people, 'firstname');
 var groupedByAge= group(people, 'age');

 */

var group = function (people, trait) {
    if (!people[0].hasOwnProperty(trait)) {
        return false;
    }
    var result = {},
        i,
        person;
    for (i in people) {
        person = people[i];
        if (!result[person[trait]]) {
            result[person[trait]] = [];
        }
        result[person[trait]].push(person);
    }

    return result;

};


var people = [
    {firstname: 'Gosho', lastname: 'Petrov', age: 32},
    {firstname: 'Ivan', lastname: 'Ivanov', age: 81},
    {firstname: 'Petur', lastname: 'Ivanov', age: 55},
    {firstname: 'Petur', lastname: 'Petrov', age: 81},
    {firstname: 'Ivan', lastname: 'Grigorov', age: 32}
];
console.log("Grouped by first name");
console.log(group(people, 'firstname'));
console.log('==========================================================================================');
console.log("Grouped by age");
console.log(group(people, 'age'));
console.log('==========================================================================================');
console.log("Grouped by last name");
console.log(group(people, 'lastname'));
console.log(group(people, 'haircolor'));