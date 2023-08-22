interface BasicAddress {
    name?: string
    street: string
    city: string
    country: string
    postalCode: string
}

interface AddressWithUnit extends BasicAddress {
    unit: string
}

interface Colorful {
    color: string
}
interface Circle {
    radius: number
}

interface ColorCircle extends Colorful, Circle {

}
const cc: ColorCircle = {
    color: 'red',
    radius: 42
}