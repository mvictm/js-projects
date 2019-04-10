"use strict";
 var first = 17;

/**
 * do-while loop: firstly, execute do block, after check condition
 * */
do {
    document.write(first);
    first++;
} while (first < 20);

/**
 * while loop: firstly check condition, after execute block
 * */
while (first < 20) {
    document.write(first);
    first++;
}

/**
 * for loop: execute, while condition is true, increase in each step
 * */
for (let i = 13; i <first; i++) {
    document.write(first);
}