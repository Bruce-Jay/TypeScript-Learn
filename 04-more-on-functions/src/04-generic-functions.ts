/* function firstElement(arr: any[]) {
    return arr[0]
}

console.log(firstElement(['a', 'b'])) */

/* function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0]
}

firstElement(['a', 'b', 'c']) */

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func)
}

const parsed = map(['1', '2', '3'], (n) => parseInt(n))
console.log(parsed)