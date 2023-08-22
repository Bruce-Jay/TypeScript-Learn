type voidFunc = () => void

const f1: voidFunc = () => {
    // 虽然写着返回值为 true 但是实际上返回值为 void
    return true
}

const f2: voidFunc = () => true

const f3: voidFunc = function() {
    return true
}

const v1 = f1()
const v2 = f2()
const v3 = f3()