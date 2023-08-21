const oneHundred: bigint = BigInt(100);
const anotherBigInt: bigint = 100n;

const firstName = Symbol('first name');
const secondName = Symbol('second name');

if (firstName === secondName) {
    console.log('firstName === secondName');
} // false