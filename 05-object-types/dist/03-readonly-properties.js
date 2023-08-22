"use strict";
function doSomething(obj) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
    // But we can't re-assign it.
    // obj.prop = 'hello'
}
function visitForBirthday(home) {
    console.log(home.resident.name);
    home.resident.age++;
}
/* function evict(home: Home) {
    home.resident = {
        name: 'Felix',
        age: 18
    }
} */ 
