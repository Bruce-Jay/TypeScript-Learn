interface StringArray {
    [index: number]: string
}

const myArray: StringArray = ['Bob', 'Fred']
const secondItem = myArray[1]

interface TestString {
    [props: string]: number
}

const testString: TestString = {
    x: 100,
    y: 200,
    aaa: 300
}

interface Animal {
    name: string
}

interface Dog extends Animal {
    breed: string
}

interface NotOkay {
    [index: string]: number | string,
    length: number,
    name: string
}

const notOkay: NotOkay = {
    x: 100,
    y: '200',
    length: 100,
    name: 'hello'
}

interface ReadonlyStringArray {
    readonly [index: number]: string
}

const myArray2: ReadonlyStringArray = ['Alice', 'Bob']
// myArray2[2] = 'Mallory' // error!