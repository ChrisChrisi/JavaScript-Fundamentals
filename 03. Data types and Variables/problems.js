/**
 ### Problem 1. JavaScript literals
 *    Assign all the possible JavaScript literals to different variables.
 */


var arrayLiteral = ["One", "Two", "Three"];
var booleanLiteralTrue = true;
var booleanLiteralFalse = false;
var integerLiteralDec = 5;
var integaerLiteralOct = 015;
var integaerLiteralHex = 0x155;
var floatLiteral = 3.333;
var objectLiteralHouse = {door: "wooden", walls: "bricks", windows: "glass"};

var stringLiteral = "This is the first sentence. \n This is the second sentence.";

/**
 * ### Problem 2. Quoted text
 *    Create a string variable with quoted text in it.
 *    For example: `'How you doin'?', Joey said'.
 */

var quotedText = '\'How you doin\'?\', Joey said\'';
var anotherQuotedText = "'How you doin'?', Joey said'";

console.log("First quoted text: ");
console.log(quotedText);
console.log("Second quoted text: ");
console.log(anotherQuotedText);

/**
 * ### Problem 3. Typeof variables
 *    Try typeof on all variables you created.
 */

console.log("\narray literal: ");
console.log(arrayLiteral);
console.log("typeof on array literal: ");
console.log(typeof arrayLiteral);

console.log("\nboolean literal: ");
console.log(booleanLiteralTrue);
console.log("typeof on boolean literal: ");
console.log(typeof booleanLiteralTrue);

console.log("\ninteger literal: ");
console.log(integerLiteralDec);
console.log("typeof on integer literal: ");
console.log(typeof integerLiteralDec);

console.log("\nfloat literal: ");
console.log(floatLiteral);
console.log("typeof on float literal: ");
console.log(typeof floatLiteral);

console.log("\nobject literal: ");
console.log(objectLiteralHouse);
console.log("typeof on object literal: ");
console.log(typeof objectLiteralHouse);

console.log("\nstring literal: ");
console.log(stringLiteral);
console.log("typeof on string literal: ");
console.log(typeof stringLiteral);

/**
 * ### Problem 4. Typeof null
 *	Create null, undefined variables and try typeof on them.
*/

var nullVar = null;
var undefinedVar;

console.log("\n variable with null value: ");
console.log(nullVar);
console.log("typeof variable with null value: ");
console.log(typeof nullVar);

console.log("\n variable with undefined value: ");
console.log(undefinedVar);
console.log("typeof variable with undefined value: ");
console.log(typeof undefinedVar);
