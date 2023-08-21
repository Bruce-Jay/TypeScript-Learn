"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function getSmallPet() {
    let fish = {
        name: 'shark',
        swim: () => {
        }
    };
    let bird = {
        name: 'eagle',
        fly: () => {
        }
    };
    return false ? bird : fish;
}
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
const zoo = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1 = zoo.filter(isFish);
const underWater2 = zoo.filter(isFish);
const underWater3 = zoo.filter((pet) => {
    return pet.swim !== undefined;
});
console.log(underWater1, underWater2, underWater3);
