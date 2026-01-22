"use strict";
const numeros = [10, 25, 30, 45, 60];
const valores = [10, "Taxafixa", 100, "Desconto"];
function maiorQueVinte(data) {
    return data.filter(item => item > 20);
}
console.log(maiorQueVinte(numeros));
//filtrando array misto numero e string
function filtrarNumeros(data) {
    return data.filter(item => typeof item === "number" && item > 20);
}
console.log(filtrarNumeros(valores));
//filtrando array misto numero e string
function filtrar(data) {
    return data.filter(item => typeof item);
}
console.log(filtrar(valores));
