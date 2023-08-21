type Point = {
    x: number
    y: number
}

function printCoord1(pt: Point) {

}
printCoord1({ x: 100, y: 100 })

type ID = number | string
function printId1(id: ID) {
    console.log(`Your ID is: ${id}`)
}