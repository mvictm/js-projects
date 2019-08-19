"use strict";
var first = 17;

/**
 * do-while loop: firstly, execute do block, after check condition
 * */
do {
    document.writeln(first);
    first++;
} while (first < 20);

document.writeln("<br>");
first = 17;

/**
 * while loop: firstly check condition, after execute block
 * */
while (first < 20) {
    document.write(first);
    first++;
}

document.writeln("<br>");
first = 17;

/**
 * when the 'i' will 0, while return false
 * */
var i = 3;
while (i) {
    document.writeln(i);
    i--;
}

document.writeln("<br>");
first = 17;

/**
 * for loop: execute, while condition is true, increase in each step
 * */
for (let i = 13; i < first; i++) {
    document.writeln(first);
}

document.writeln("<br>");
first = 17;

/**
 * show only odd numbers
 * */
for (let i = 0; i < 10; i++) {
    if (i % 2) alert(i + " number");
}

/**
 * show only even numbers
 * */
for (let i = 0; i < 10; i++) {
    if (!(i % 2)) alert(i + " number")
}

while (true) {
    let personData = prompt("Enter the number more than 100");
    if (+personData > 100 && +personData != null) break;
}