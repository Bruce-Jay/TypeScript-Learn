function identity<Type>(arg: Type): Type {
    return arg
}

/* let myIdentity: <Type>(arg: Type) => Type = identity */

/* interface GenericIdentityFn {
    <Type>(arg: Type): Type
}
const myIdentity: GenericIdentityFn = identity */

interface GenericIdentityFn<Type> {
    (arg: Type): Type
}

const myIdentity: GenericIdentityFn<number> = identity