"use strict";
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
function printName(obj) {
    console.log(obj.first.toUpperCase());
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
}
