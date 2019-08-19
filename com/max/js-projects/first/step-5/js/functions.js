/**
 * This function is not work, if user did't write a text
 * */
function showMessage(from, text) {
    if (text === undefined) {
        text = 'текст не передан';
        return;
    }

    alert( from + ": " + text );
}

showMessage("Маша", "Привет!"); // Маша: Привет!
showMessage("Маша"); // Маша: текст не передан

function withoutIf(age) {
    return (age > 18) ? true : confirm('Access?')
}

function min(a,b) {
    return (a > b) ? a : b
}

function pow(x,n) {
    if (n != undefined && n > 1) {
        let result = 0;
        for (i = 0; i < n; i++) {
            result *= x;
        }
        f(); // show code in window
        return result;
    } else {
        alert('You entered incorrect data!');
    }
}

function f() {
    alert( pow );
}

