"use strict";
function paintShape(opts) {
    let xpos = opts.xPos || 0;
    let ypos = opts.yPos || 0;
    console.log(xpos);
}
const shape = {};
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
