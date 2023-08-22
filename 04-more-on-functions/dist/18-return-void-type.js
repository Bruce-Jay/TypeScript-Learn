"use strict";
const f1 = () => {
    // 虽然写着返回值为 true 但是实际上返回值为 void
    return true;
};
const f2 = () => true;
const f3 = function () {
    return true;
};
const v1 = f1();
const v2 = f2();
const v3 = f3();
