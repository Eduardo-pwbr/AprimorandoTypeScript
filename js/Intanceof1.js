"use strict";
class Produto {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco}`;
    }
}
const livro = new Produto("JavaScript", 19.99);
console.log(livro.nome);
console.log(livro.precoReal());
console.log(livro instanceof Produto); // true
