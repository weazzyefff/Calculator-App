

function add(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

function subtract(...args) {
    let sum = 0;
    for (let arg of args) {
        sum=- arg;
    }
    return sum;
}
console.log(subtract(5,4));