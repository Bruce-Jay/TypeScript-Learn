function greet(person: Person) {
    return `Hello ${person.name}`;
}

interface Person {
    name: string
    age: number
}