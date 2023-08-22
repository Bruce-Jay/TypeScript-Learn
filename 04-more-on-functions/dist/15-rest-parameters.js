"use strict";
function multiply(n, ...numbers) {
    return numbers.map((num) => num * n);
}
const a = multiply(10, 1, 2, 3, 4);
console.log(a);
// [ 10, 20, 30, 40 ]
