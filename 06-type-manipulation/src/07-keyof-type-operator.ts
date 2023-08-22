type Point = { x: number; y: number };

type P = keyof Point

const p1: P = 'x'
const p2: P = 'y'
// const p3: P = 'z' // Type '"z"' is not assignable to type '"x" | "y"'.


type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish
const a: A = 0
// const a1: A = 'a'

type Mapish = { [k: string]: boolean }
type M = keyof Mapish
const m1: M = 'a'
const m2: M = 1
// const m3: M = true