//Global variables
displayValue = 0;

// Main functions
const add = (...args) => args.reduce((a, b) => a + b);

const subtract = (...args) => args.reduce((a, b) => a - b);

const multiply = (...args) => args.reduce((a, b) => a * b);

const divide = (...args) => args.reduce((a, b) => a / b);

const operate = (operator, a, b) => {
    switch (operator) {

        case '+':
            return add(a,b);
          
        case '-':
            return subtract(a,b);
           
        case '*':
            return multiply(a,b);
          
        case '/':
            return divide(a,b);
            
        default: console.log('Please enter a valid operator');
    }
}


const one = document.getElementById("1");
one.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 1;
    displayValue = 1;
});
const two = document.getElementById("2");
two.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 2;
    displayValue = 2;
});
const three = document.getElementById("3");
three.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 3;
    displayValue = 3;
});
const four = document.getElementById("4");
four.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 4;
    displayValue = 4;
});
const five = document.getElementById("5");
five.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 5;
    displayValue = 5;
});
const six = document.getElementById("6");
six.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 6;
    displayValue = 6;
});
const seven = document.getElementById("7");
seven.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 7;
    displayValue = 7;
});
const eight = document.getElementById("8");
eight.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 8;
    displayValue = 8;
});
const nine = document.getElementById("9");
nine.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 9;
    displayValue = 9;
});
const clear = document.getElementById("clear");
clear.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 0;
    displayValue = 0;
});
const addSign = document.getElementById("+");
addSign.addEventListener("click", (e) => {
  operator = '+';

});
const subtractSign = document.getElementById("-");
subtractSign.addEventListener("click", (e) => {
  subtract();
});
const multiplySign = document.getElementById("*");
addSign.addEventListener("click", (e) => {
  multiply();
});
const divideSign = document.getElementById("/");
addSign.addEventListener("click", (e) => {
  divide();
});
const equals = document.getElementById("=");
equals.addEventListener("click", (e) => {
  document.querySelector(".display").innerHTML = operate(operator;displayValue);
});


//console.log(operate('+',10, 5)); <<working