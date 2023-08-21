"use strict";
function minimumLength(obj, minimum) {
    if (obj.length >= minimum) {
        return obj;
    }
    else {
        return { length: minimum };
    }
}
