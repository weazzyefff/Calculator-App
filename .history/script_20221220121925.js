//Global variables
let displayValue = [];
let pendingVal = [];
let operator = [];

// Main functions
const add = (...args) => args.reduce((a, b) => a + b);

const subtract = (...args) => args.reduce((a, b) => a - b);

const multiply = (...args) => args.reduce((a, b) => a * b);

const divide = (...args) => args.reduce((a, b) => a / b);

const operate = (operator, displayValue) => {

    switch (operator) {

        case '+':
            return add(displayValue);
          
        case '-':
            return subtract(displayValue);
           
        case '*':
            return multiply(displayValue);
          
        case '/':
            return divide(displayValue);
            
        default: console.log("Blackhole sun, won't you come");
    }
}


const one = document.getElementById("1");
one.addEventListener("click", (e) => {
    pendingVal = pendingVal + '1';
    pendingVal = pendingVal.join('');
    document.querySelector(".display").innerHTML = pendingVal;
});
const two = document.getElementById("2");
two.addEventListener("click", (e) => {
    displayValue.push(2);
    pendingVal = 2;
    document.querySelector(".display").innerHTML = pendingVal;
   
});
const three = document.getElementById("3");
three.addEventListener("click", (e) => {
    displayValue.push(3);
    pendingVal = 3;
    document.querySelector(".display").innerHTML = pendingVal;
});
const four = document.getElementById("4");
four.addEventListener("click", (e) => {
    displayValue.push(4);
    pendingVal = 4;
    document.querySelector(".display").innerHTML = pendingVal;
});
const five = document.getElementById("5");
five.addEventListener("click", (e) => {
    pendingVal.push('5');
    pendingVal = pendingVal.join('');
    document.querySelector(".display").innerHTML = pendingVal;
});
const six = document.getElementById("6");
six.addEventListener("click", (e) => {
    displayValue.push(6);
    pendingVal = 6;
    document.querySelector(".display").innerHTML = pendingVal;
});
const seven = document.getElementById("7");
seven.addEventListener("click", (e) => {
    displayValue.push(4);
    pendingVal = 4;
    document.querySelector(".display").innerHTML = pendingVal;
});
const eight = document.getElementById("8");
eight.addEventListener("click", (e) => {
    pendingVal.push(8);
    document.querySelector(".display").innerHTML = pendingVal;
});
const nine = document.getElementById("9");
nine.addEventListener("click", (e) => {
    displayValue.push(9);
    pendingVal = 9;
    document.querySelector(".display").innerHTML = pendingVal;
});
const clear = document.getElementById("clear");
clear.addEventListener("click", (e) => {
    document.querySelector(".display").innerHTML = 0;
    return displayValue = [];
});
const addSign = document.getElementById("+");
addSign.addEventListener("click", (e) => {
    operator.push('+');
    displayValue = pendingVal.join('');
    document.querySelector(".display").innerHTML = displayValue;
    pendingVal = parseInt(displayValue);
    displayValue.push(displayValue);
    console.log(displayValue);
    
    


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
  return document.querySelector(".display").innerHTML = operate(operator, displayValue);
});


//console.log(operate('+',10, 5)); <<working