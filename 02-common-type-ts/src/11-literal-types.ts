function printText(s: string, alignment: 'left' | 'right' | 'center') {
    // ...
}
printText('Hello, world', 'left');

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1
}

interface Options {
    width: number
}

function configure(x: Options | 'auto') {
    // ...
}

configure({width: 100})
configure('auto')

let a: true = true
// let b: false = true

function handleRequest(url: string, method: 'GET' | 'POST') {
    // ...
}
const req = {
    url: 'https://example.com',
    method: 'GET'
}
handleRequest(req.url, req.method as 'GET')