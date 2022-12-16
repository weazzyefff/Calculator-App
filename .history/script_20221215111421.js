

function add(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}




const subtract = (...args) => args.reduce((a, b) => a - b);
console.log(subtract(5,4));