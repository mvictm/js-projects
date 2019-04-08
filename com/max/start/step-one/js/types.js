/**
 * Define var variable. This type is visible around the file.
 * */
console.log(template);
var template = 3;


var string = "string";
var integer = 42;
var boolean = true;

/**
 * Show all work in HTML page. It's important: page order depends on invoke script
 * */
document.write("Type: ", typeof string, "<br>Value: ", string, "<br> <br>");
document.write("Type: ", typeof string, "<br>Value: ", integer, "<br> <br>");
document.write("Type: ", typeof string, "<br>Value: ", boolean, "<br> <br>");
document.write("Type: ", typeof null, "<br>Value: ", null, "<br> Remember! Null isn't a object!");

