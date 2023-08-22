function loggingIdentity<Type> (arg: Type): Type {
    console.log(arg)
    return arg
}