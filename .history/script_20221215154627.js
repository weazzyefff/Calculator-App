
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


console.log(operate('+',10, 5));