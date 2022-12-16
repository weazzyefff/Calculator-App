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
//console.log(operate('+',10, 5)); <<working