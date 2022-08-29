let num1 = "";
let num2 = "";
let operator;
let equalTo = 0;
let isItClick = 0;
let display = document.getElementById('display');



function setValue(number) {
    if (equalTo === 1) {
        clearButton();
    }

    if (isItClick === 0) {
        num1 += number;
        display.innerHTML = num1;
    } else {
        num2 += number;
        display.innerHTML = num2;
    }

    if (num1.length > 12 || num2.length > 12) {
        display.innerHTML = "you reach your max number";
    }
}

function oppClick(numericode) {
    operator = numericode;
    let oppString = "";
    isItClick = 1;

    if (operator === 4) {
        display.innerHTML += "/";
        oppString = "/";
    } else if (operator === 3) {
        display.innerHTML += "x";
        oppString = "x";
    } else if (operator === 2) {
        display.innerHTML += "-";
        oppString = "-";
    } else {
        display.innerHTML += "+";
        oppString = "+";
    }

    if (isItClick === 1) {
        display.innerHTML = num1 + oppString;
    }

    if (num1 === "" && isItClick === 1) {
        clearButton();
    }

    if (equalTo === 1) {
        clearButton();
    }
}

function equalClick() {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    isItClick = 1;
    let result = +"";
    let resultRounded = "";

    switch (true) {
        case (operator === 4):
            result = num1 / num2;
            break;
        case (operator === 3):
            result = num1 * num2;
            break
        case (operator === 2):
            result = num1 / num2;
            break
        case (operator === 1):
            result = num1 + num2;
    }
    resultRounded = result.toFixed(4);
    display.innerHTML = resultRounded;

    if (resultRounded === "NaN") {
        display.innerHTML = "pls give the right number";
    }
}

function clearButton() {
    num1 = "";
    num2 = "";
    isItClick = 0;
    equalTo = 0;
    display.innerHTML = "";

}

function backSpace(){
    let temp1 = "";
    let temp2 = "";

    if (equalTo === 1) {
        clearButton();
    }
    if (isItClick === 0) {
        temp1 = num1.substring(0, num1.length - 1);
        display.innerHTML = temp1;
        num1 = temp1;
    }

    if (isItClick === 1) {
        display.innerHTML = num1;
        isItClick = 0;
    }

    if (num2 !== "") {
        temp2 = num2.substring(0, num2.length -1);
        display.innerHTML = num1 + operator + num2;
        num2 = temp2;
        isItClick = 1;

        if (operator === 1) {
          display.innerHTML = num1 + "+" + num2;
        } else if (operator === 2) {
          display.innerHTML = num1 + "-" + num2;
        } else if (operator === 3) {
          display.innerHTML = num1 + "*" + num2;
        } else if(operator === 4){
          display.innerHTML = num1 + "/" + num2;
        }
    }
    
}


function setDecimal() {
    if (isItClick === 0) {
        if (num1 === "") {
            num1 = "0.";
            display.innerHTML = num1;
        }
        if (num1.indexOf('.') === -1) {
            num1 += ".";
            display.innerHTML = num1;
        }
    }

    if (isItClick === 1) {
        if (num2 === "") {
            num2 = "0.";
            display.innerHTML += num2;
        }

        if (num2.indexOf('.') === -1) {
            num2 += ".";
            display.innerHTML = num1 + operator + num2;
            if (operator === 1) {
                display.innerHTML = num1 + "+" + num2;
            } else if (operator === 2) {
                display.innerHTML = num1 + "-" + num2;
            } else if (operator === 3) {
                display.innerHTML = num1 + "*" + num2;
            } else if (operator === 4) {
                display.innerHTML = num1 + "/" + num2;
            }
        }
    }
}