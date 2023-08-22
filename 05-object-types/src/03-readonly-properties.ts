interface SomeType {
    readonly prop: string
}

function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`)

    // But we can't re-assign it.
    // obj.prop = 'hello'
}

interface Home {
    readonly resident: {
        name: string,
        age: number
    }
}

function visitForBirthday(home: Home) {
    console.log(home.resident.name)
    home.resident.age++
}

/* function evict(home: Home) {
    home.resident = {
        name: 'Felix',
        age: 18
    }
} */