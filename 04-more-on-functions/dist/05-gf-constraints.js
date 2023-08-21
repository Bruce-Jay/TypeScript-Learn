"use strict";
// extends{length: number} 说明传入的 a b 必须有 length 属性
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
const longerArray = longest([1, 2], [2, 3, 4]);
const longerString = longest('felix', 'lu');
// const notOk = longest(10, 100)
