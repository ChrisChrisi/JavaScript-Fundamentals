"use strict";

/**
 *### Problem 4. Parse tags
 *	You are given a text. Write a function that changes the text in all regions:

 <upcase>text</upcase> to uppercase.
 <lowcase>text</lowcase> to lowercase
 <mixcase>text</mixcase> to mix casing(random)

 _Example:_ We are `<mixcase>living</mixcase>` in a `<upcase>yellow submarine</upcase>`. We `<mixcase>don't</mixcase>` have `<lowcase>anything</lowcase>` else.

 _The expected result:_
 We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.

 _Note: Regions can be nested._
 */
var isLetter = function(char){
    var code = char.charCodeAt(0);
    if( ((code >= 65) && (code <= 90)) || ((code >= 97) && (code <= 122))) {
      return true;
    }
    return false;
};
var parseTags = function(text){
    var stack = [],
        char,
        cur = 0,
        length = text.length,
        result = '',
        mix = true;
    while(cur < length){
        char = text[cur];
        if(char !== '<'){
          if(stack[stack.length - 1] === 1){
              result += char.toUpperCase();
          } else if(stack[stack.length - 1] === 2){
              result += char.toLocaleLowerCase();
          } else if(stack[stack.length - 1] === 3){
             if(isLetter(char)){
                 if(mix){
                     result += char.toUpperCase();
                 } else {
                     result += char.toLocaleLowerCase();
                 }
                 mix = !mix;
             } else {
                 result += char;
             }
          } else {
              result += char;
          }
            cur += 1;
        } else if(text.indexOf('<upcase>', cur) === cur ){
            stack.push(1);
            cur += 8;
        }else if(text.indexOf('<lowcase>', cur) === cur ){
            stack.push(2);
            cur += 9;
        }
        else if(text.indexOf('<mixcase>', cur) === cur ){
            stack.push(3);
            cur += 9;
        } else if(text.indexOf('</upcase>', cur) === cur ){
            stack.pop();
            cur += 9;
        }else if(text.indexOf('</lowcase>', cur) === cur ){
            stack.pop();
            cur += 10;
        }
        else if(text.indexOf('</mixcase>', cur) === cur ){
            stack.pop();
            cur += 10;
            mix = true;
        }else {
            console.log(result);
            console.log(char);
            return;
        }
    }
    return result;
};

var text = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.";
console.log(parseTags(text));