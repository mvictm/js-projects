"use strict";
/**
 * Condition if
 * */
let question = prompt("How old are you?", "");

if (question !== null && question !== " " && question.length !== 0 && isFinite(+question)) {
    if (+question < 17) {
        alert("Sorry, you're small");
        //window.close(); // radical approach =)
    } else {
        alert("Welcome to site!")
    }


    if (0 || +"0") {
        alert("Never invoke");
    }

    if (1) {
        alert("Always invoke")
    }

    /**
     * Ternary operator
     * */
    (question < 10) ? alert("Hi child")
        : (question < 18) ? alert("Hello")
        : (question < 100) ? alert("Welcome")
            : alert("Seriously?");
    /**
     * Example
     *
     * @return -1 if defineNumber < 0
     *          0 if defineNumber = 0
     *          1 if defineNumber > 0
     * */
    let defineNumber = prompt("Enter the number", "");
    if (isFinite(+defineNumber)) {
        (+defineNumber < 0) ? alert("-1")
            : (defineNumber > 0) ? alert("1")
            : alert("0");
    } else {
        alert("It's not a number")
    }
} else {
    alert("It's not a number");
    location.reload();
}

/**
 * Condition switch
 * */
var variable = prompt("Enter the variable, which stay between 1 and 4");
switch (+   variable) {
    case 1:
        alert('Your choice is one: Ok');
        break;

    case 2:
        alert('Your choice is two: Good');
        break;

    case 3:
        alert('Your choice is three: The Best');
        break;

    case 4:
        alert('Your choice is four: Unbelievable');
        break;

    default:
        alert('Your variables not supported!');
        break;
}
