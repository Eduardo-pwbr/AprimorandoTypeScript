"use strict";
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    else {
        throw 'Tipo não suportado | string';
    }
}
console.log(toNumber('4000'));
