"use strict";
/* function create<Type>(c: { new(): Type }): Type {
    return new c()
} */
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = 'Mikle';
    }
}
class Animal {
    constructor() {
        this.numLegs = 4;
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new BeeKeeper();
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
function createInstance(c) {
    return new c();
}
