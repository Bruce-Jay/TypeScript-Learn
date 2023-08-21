"use strict";
function example() {
    let x;
    x = Math.random() < 0.5;
    console.log(x);
    if (Math.random() < 0.5) {
        x = 'hello';
        console.log(x);
    }
    else {
        x = 100;
        console.log(x);
    }
    return x;
}
let abc = example();
abc = 'hello';
abc = 100;
// 不能为 boolean，因为 example 函数的返回值类型是 string | number
// abc = true
