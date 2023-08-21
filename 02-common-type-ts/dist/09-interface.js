"use strict";
function printCoord9(pt) {
}
printCoord9({ x: 100, y: 100 });
// 扩展接口
// interface Animal {
//     name: string
// }
// interface Bear extends Animal {
//     honey: boolean
// }
// const bear: Bear = { name: 'bear', honey: true }
// 交叉扩展
// type Animal = {
//     name: string
// }
// type Bear = Animal & { honey: boolean }
// //  这是交叉扩展
// const bear: Bear = { name: 'bear', honey: true }
// 向现有的类型添加属性
// interface MyWindow {
//     count: number
// }
// interface MyWindow {
//     name: string
// }
// const w: MyWindow = {
//     count: 100,
//     name: '2'
// }
// 以 type 创建的类型不能重复声明扩展，而 interface 创建的类型可以如此扩展
