type ABC = {a: number, b: number, c: number}

function sum({a, b, c}: ABC) {
    console.log(a + b + c)
}

sum({a: 1, b: 2, c: 3})