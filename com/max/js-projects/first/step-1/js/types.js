"use strict";
/**
 * Define var variable. This type is visible around the file. So we can declare variable before initialization, but
 * if we try to get it, we see undefined.
 * */
console.log(template);
var template = 3;


var string = "string";
var integer = 42;
var boolean = true;

/**
 * Show all work in HTML page. It's important: line order depends on invoke script
 * */
document.write("Type: ", typeof string, "<br>Value: ", string, "<br> <br>");
document.write("Type: ", typeof string, "<br>Value: ", integer, "<br> <br>");
document.write("Type: ", typeof string, "<br>Value: ", boolean, "<br> <br>");
document.write("Type: ", typeof null, "<br>Value: ", null, "<br> Remember! Null isn't a object!");

/**
 * This is final variable, which we can't override
 * */
const pi = 3.14;
//pi = 23;
document.writeln("<br><br>" + pi + " This is constant<br><br>");

/**
 * Variable initialize when we compiler read this line.
 * */
let variable = 12;

/**
 * Different between var & let & const
 * */
{
    var exampleVar = "Visible var variable";
    let exampleLet = "Invisible let variable";
    const exampleConst = "Invisible const variable"
}

document.write(exampleVar);
//document.write(exampleLet);
//document.write(exampleConst);

