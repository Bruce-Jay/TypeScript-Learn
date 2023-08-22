"use strict";
const ccy = {
    color: 'red',
    radius: 42
};
function draw(circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}
draw({ color: 'blue', radius: 42 });
