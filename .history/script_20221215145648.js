
const add = (...args) => args.reduce((a, b) => a + b);

const subtract = (...args) => args.reduce((a, b) => a - b);

const multiply = (...args) => args.reduce((a, b) => a * b);

const divide = (...args) => args.filter(num > 0)
    .reduce((a, b) => a / b);




console.log(divide(10, 5));