class GenericNumber<NumType> {
    zeroValue!: NumType;
    add!: (x: NumType, y: NumType) => NumType;
}

const myGeneric = new GenericNumber<number>();
myGeneric.zeroValue = 0;
myGeneric.add = (x, y) => x + y;