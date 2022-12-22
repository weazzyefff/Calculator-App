//Global variables
let displayValue = [];
let operator = [];

// Main functions
const add = (...args) => args.reduce((a, b) => a + b);

const subtract = (...args) => args.reduce((a, b) => a - b);

const multiply = (...args) => args.reduce((a, b) => a * b);

const divide = (...args) => args.reduce((a, b) => a / b);

const operate = (operator, ...displayValue) => {

    switch (operator) {

        case '+':
            return add(...displayValue);
          
        case '-':
            return subtract(...displayValue);
           
        case '*':
            return multiply(...displayValue);
          
        case '/':
            return divide(...displayValue);
            
        default: console.log("Blackhole sun, won't you come");
    }
}


const one = document.getElementById("1");
one.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 1;
    displayValue.push(1);
});
const two = document.getElementById("2");
two.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 2;
    displayValue.push(2);
});
const three = document.getElementById("3");
three.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 3;
    displayValue.push(3);
});
const four = document.getElementById("4");
four.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 4;
    displayValue.push(4);
});
const five = document.getElementById("5");
five.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 5;
    displayValue.push(5);
});
const six = document.getElementById("6");
six.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 6;
    displayValue.push(6);
});
const seven = document.getElementById("7");
seven.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 7;
    displayValue.push(7);
});
const eight = document.getElementById("8");
eight.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 8;
    displayValue.push(8);
});
const nine = document.getElementById("9");
nine.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 9;
    displayValue.push(9);
});
const clear = document.getElementById("clear");
clear.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 0;
    return displayValue = [];
});
const addSign = document.getElementById("+");
addSign.addEventListener("click", (e) => {
    operator.push('+');

});
const subtractSign = document.getElementById("-");
subtractSign.addEventListener("click", (e) => {
    operator.push('-');
});
const multiplySign = document.getElementById("*");
multiplySign.addEventListener("click", (e) => {
    operator.push('*');
});
const divideSign = document.getElementById("divide");
divideSign.addEventListener("click", (e) => {
    operator.push('/');
});
const equals = document.getElementById("=");
equals.addEventListener("click", (e) => {
  return document.querySelector(".display").innerHTML = operate(...operator, ...displayValue);
});


//console.log(operate('+',10, 5)); <<working