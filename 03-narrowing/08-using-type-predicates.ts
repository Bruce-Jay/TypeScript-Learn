type Fish = {
    name: string
    swim: () => void
}

type Bird = {
    name: string
    fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getSmallPet(): Fish | Bird {
    let fish: Fish = {
        name: 'shark',
        swim: () => {

        }
    }

    let bird: Bird = {
        name: 'eagle',
        fly: () => {

        }
    }

    return false ? bird : fish
}

let pet = getSmallPet()

if (isFish(pet)) {
    pet.swim()
} else {
    pet.fly()
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()]
const underWater1: Fish[] = zoo.filter(isFish)
const underWater2: Fish[] = zoo.filter(isFish) as Fish[]
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
    return (pet as Fish).swim !== undefined
})
console.log(underWater1, underWater2, underWater3)