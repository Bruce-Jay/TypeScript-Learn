interface Box<Type> {
    contents: Type
}

let boxA: Box<string> = { contents: 'hello' }
let boxB: Box<number> = { contents: 42 }
let boxC: Box<string[]> = { contents: ['world'] }

type OrNull<Type> = Type | null
type OneOrMany<Type> = Type | Type[]

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>
type OneOrManyOrNullStrings = OneOrManyOrNull<string>
