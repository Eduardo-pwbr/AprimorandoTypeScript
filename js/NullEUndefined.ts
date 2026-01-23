const button = document.querySelector("button");
const config = localStorage.getItem("config");
let total;


if (button !== null) {
    button.click();
}
if(button){
  button.click();
}
 //Usando o operador de encadeamento opcional
button?.click();
console.log(Boolean(config));

console.log("Valor não definido: " + total);

interface Produto {
  nome: string;
  preco: number;
  unidades?: number; // propriedade opcional
}
function mostrarProduto(produto: Produto) {
  console.log(`O nome do produto é ${produto.nome}`);
  console.log(`O preço do produto é ${produto.preco}`); 
}
