"use strict";
/**
 * Different math operation
 * */

var first = 7;
var second = 9;
var string = "string";
var stringDigit = "9";
var boolean = true;

console.log("first: ",first);
console.log("second: ",second);
console.log("string: ",string);
console.log("stringDigit: ",stringDigit);
/**
 * Standard operation
 * */
document.write("Plus: ", first + second, "<br>");
document.write("Minus: ", first - second, "<br>");
document.write("Division: ", first / second, "<br>");
document.write("Multiply: ", first * second, "<br>");
document.write("Division with remainder: ", first % second, "<br>");

/**
 * Magic operation.
 * If we sum digit & string = result will be a string
 * But sum of digit & string digit with additional plus return digit
 * */
document.write("String plus digit: ", first + string, "<br>");
document.write("Digit plus string digit: ", first + stringDigit, "<br>");
document.write("Digit plus string digit with additional plus: ", first + +stringDigit, "<br>","<br>");

/**
 * Remark about equal sign in JS:
 * = means assignment
 * == means compare values
 * === means compare types
 * */
document.write("Compare second and stringDigit by means of double equal sign: ", stringDigit == second,"<br>");
document.write("Compare second and string: ", stringDigit === second);
