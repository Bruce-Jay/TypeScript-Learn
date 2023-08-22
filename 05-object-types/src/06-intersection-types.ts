interface Colorful {
    color: string
}
interface Circle {
    radius: number
}

type ColorfulCircle = Colorful & Circle

const ccy: ColorfulCircle = {
    color: 'red',
    radius: 42
}

function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`)
    console.log(`Radius was ${circle.radius}`)
}
draw({ color: 'blue', radius: 42 })

