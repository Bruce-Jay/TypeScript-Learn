"use strict";
function handleShape(shape) {
    if (shape.kind === "square") {
    }
}
function getArea(shape) {
    // if (shape.kind === "square") {
    //     return shape.sideLength ** 2
    // }
    // return Math.PI * shape.radius ** 2
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
