"use strict";
const oneHundred = BigInt(100);
const anotherBigInt = 100n;
const firstName = Symbol('first name');
const secondName = Symbol('second name');
if (firstName === secondName) {
    console.log('firstName === secondName');
} // false
