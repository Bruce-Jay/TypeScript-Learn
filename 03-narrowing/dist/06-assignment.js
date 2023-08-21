"use strict";
// 分配缩小
// let x: string | number
let x = Math.random() < 0.5 ? 10 : "hello world!";
x = 1;
console.log(x);
x = 'goodbye';
console.log(x);
// x can't be boolean
// x = true
// console.log(x)
