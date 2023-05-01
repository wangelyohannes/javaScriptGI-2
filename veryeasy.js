
let num1 = 5643;
let num2 = 3464;

function min(x, y) {
    if (x < y) {
        return `The minimum is ${x}`;
    } else {
        return `The minimum is ${y}`;
    }
}

console.log(min(num1, num2));