interface Circle {
    kind: "circle";
    radius: number
}

interface Square {
    kind: "square";
    sideLength: number
}

type Shape = Circle | Square

function handleShape(shape: Shape) {
    if (shape.kind === "square") {

    }
}

function getArea(shape: Shape) {
    // if (shape.kind === "square") {
    //     return shape.sideLength ** 2
    // }
    // return Math.PI * shape.radius ** 2
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.sideLength ** 2

        default: 
            const _exhaustiveCheck: never = shape
            return _exhaustiveCheck
    }
}