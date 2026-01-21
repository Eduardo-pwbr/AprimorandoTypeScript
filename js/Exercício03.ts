
function toNumber(value: string | number){
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    else{
        throw 'Tipo não suportado | string';
    }

}
console.log(toNumber('1234'));