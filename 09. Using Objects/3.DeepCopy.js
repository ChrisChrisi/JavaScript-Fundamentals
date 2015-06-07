"use strict";

/**
 * 	Write a function that makes a deep copy of an object.
 *	The function should work for both primitive and reference types.
 */

var deepCopy = function(obj){
    var i,
        elem,
        result = {};
    if(Array.isArray(obj)){
        result = [];
    }
    for(i in obj){
        if(typeof obj[i] == 'object' && !(obj[i] === null )){
            elem = deepCopy(obj[i]);
        } else {
            elem = obj[i];
        }
        result[i] = elem;
    }
    return result;
};

var obj = {
    name: {
        first: "Petur",
        last: "Petrov"
    },
    age: 42,
    gender: "m",
    hobbies: ['hiking', 'karaoke', 'singing']
};

var obj2 = deepCopy(obj);
obj.age = 12;
obj.name.last = "Ivanov";
obj.hobbies[1] = 'board games';

console.log(obj);
console.log(obj2);
