function minimumLength<Type extends {length: number}> (
    obj: Type,
    minimum: number
): Type {
    if (obj.length >= minimum) {
        return obj
    } else {
        return {length: minimum}
    }
}