const produto: string = "Notebook";
const preco: number = 2500.99;
const emEstoque: boolean = true;


// O TypeScript infere o tipo do objeto com base nos valores atribuídos

const carro:{
    marca: string;
    ano: number;
    flex: boolean;
} = {
    marca: "Toyota",
    ano: 2020,
    flex: true,
};


// Tipo inferido como boolean | string
const valor= 300 < 400 ? true : "produto caro";

//console.log(carro);
//console.log(valor);


function soma(a: number, b: number){
    return a + b;
}
const resultado = soma(10, 20); // Tipo inferido como number
//console.log(resultado);


const videoGame= {
    marca: "PlayStation",
    preco: "2500.99"
};  

function imprimirVideoGame(produto:{marca: string, preco: string}){
produto.preco = "R$" + produto.preco;
return produto;

}
const Listaprodutos = imprimirVideoGame(videoGame);
console.log(Listaprodutos);


const nomes: string[] = ["Ana", "Bruno", "Carlos"]; // Tipo inferido como string[]  array de strings

function adicionarNome(novoNome: string){
    nomes.push(novoNome);
}
adicionarNome("Daniel");
console.log(adicionarNome)
console.log(nomes);

