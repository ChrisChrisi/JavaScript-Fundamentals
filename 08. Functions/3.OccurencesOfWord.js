"use strict";

/**
 * ### Problem 3. Occurrences of word ###
 *	Write a function that finds all the occurrences of word in a text.
 *	The search can be case sensitive or case insensitive.
 *	Use function overloading.
 */

var occurances = function(text, word, caseSensitive){
    switch(arguments.length) {
        default :
            return "Invalid number of parameters";
        case 2:
        case 3:
            var i,
                count = 0;
            caseSensitive = caseSensitive || false;
            if(caseSensitive){
                text = text.toLowerCase();
                word = word.toLowerCase();
            }

            text = text.split(' ');
            for(i in text){
                if(word === text[i]){
                    count+=1;
                }
            }
            return count;
    }
};
var text = 'The first monkey climbed on the tree. The second monkey jumped in the river. Monkey business.';
console.log(occurances(text, 'monkey'));
console.log(occurances(text, 'monkey', true));
console.log(occurances(text));
console.log(occurances());