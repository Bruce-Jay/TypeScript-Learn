"use strict";
/* class Ctor {
    s: string
    constructor(s: string) {
        this.s = s
    }
}

type SomeConstructor = {
    new (s: string): Ctor
}

function fn(ctor: SomeConstructor) {
    return new ctor("hello")
}

const f = fn(Ctor)
console.log(f.s) */
function fn(date) {
    let d = new date('2021-12-20');
    let n = date(100);
}
