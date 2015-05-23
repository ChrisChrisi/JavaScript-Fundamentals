/**
 * ### Problem 1. JavaScript literals ###
 *    Assign all the possible JavaScript literals to different variables.
 */

var arrayLiteral = ['One', 'Two', 'Three'],
    booleanLiteralTrue = true,
    booleanLiteralFalse = false,
    integerLiteralDec = 5,
    integaerLiteralOct = 015,
    integaerLiteralHex = 0x155,
    floatLiteral = 3.333,
    objectLiteralHouse = {door: 'wooden', walls: 'bricks', windows: 'glass'},
    stringLiteral = 'This is the first sentence. \n This is the second sentence.',
    functionLiteral = function () {
        console.log('Hello from the function!');
    };

/**
 *
 * ### Problem 2. Quoted text ###
 *    Create a string variable with quoted text in it.
 *    For example: `'How you doin'?', Joey said'.
 */

var quotedText = '\'How you doin\'?\', Joey said\'';
var anotherQuotedText = "'How you doin'?', Joey said'";

console.log('First quoted text: ');
console.log(quotedText);
console.log('Second quoted text: ');
console.log(anotherQuotedText);


/**
 * ### Problem 3. Typeof variables ###
 *    Try typeof on all variables you created.
 * ### Problem 4. Typeof null ###
 *    Create null, undefined variables and try typeof on them.
 */

function logAndTypeOf(val, str) {

    console.log('\n' + str + ' variable: ');
    console.log(val);
    console.log('typeof ' + str + ' variable: ');
    console.log(typeof(val));
}

var nullVar = null,
    undefinedVar;

var variables = {
    array: arrayLiteral,
    boolean: booleanLiteralTrue,
    integer: integerLiteralDec,
    float: floatLiteral,
    object: objectLiteralHouse,
    string: stringLiteral,
    function: functionLiteral,
    null: nullVar,
    undefined: undefinedVar
};

for (var index in variables) {
    if (variables.hasOwnProperty(index)) {
        logAndTypeOf(variables[index], index);
    }
}