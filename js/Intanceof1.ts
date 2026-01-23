class Produto {
  nome: string;
  preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal(){
      return `R$ ${this.preco}`;
    }
}
const livro = new Produto("JavaScript", 19.99);
console.log(livro.nome);
console.log(livro.precoReal());
console.log(livro instanceof Produto); // true