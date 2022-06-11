// Function Defination or Function Statement
function add(num1, num2) {
    // Add two numbers
    return num1 + num2;
}

// Substract two numbers
function sub(num1, num2) {
    return num1 - num2;
}

// Multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Devide two numbers
function divide(num1, num2) {
    return num1 / num2;
}


// Get max number
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else {
        console.log("They are equal");
    }
}


function getOperation(str) {
    if (str == "+") {
        console.log("add")
    } else if (str == "-") {
        console.log("sub")
    } else if (str == "*") {
        console.log("multiply")
    } else if (str == "/") {
        console.log("divide")
    } else {
        console.log("Invalid")
    }
}

