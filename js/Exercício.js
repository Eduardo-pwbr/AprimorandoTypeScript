"use strict";
//tira espaços em branco no início e no fim e coloca tudo em letras minúsculas
function normalizadorTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizadorTexto("   Olá Mundo!  "));
