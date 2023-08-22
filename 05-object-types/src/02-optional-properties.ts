type Shape = {}

interface PaintOptions {
    shape: Shape,
    xPos?: number,
    yPos?: number
}

function paintShape(opts: PaintOptions) {
    let xpos = opts.xPos || 0
    let ypos = opts.yPos || 0
    console.log(xpos)
}

const shape: Shape = {}
paintShape({ shape })
paintShape({ shape, xPos: 100 })
paintShape({ shape, yPos: 100 })
