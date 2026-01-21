 // Definindo a interface para definir objeto 'produto'
 //definindo typo primitivo direto 'pessoa'
 //Exemplo: type numeroOuString = number | string;
 
 interface produto {
   nome: string;
   preco: number;
   unidades: number;
 }
  const produto1: produto = { 
    nome: "Tênis",
    preco: 89.99,
    unidades: 5
  };
  console.log(produto1);

  const produto2: produto = {
    nome: "Camiseta",
    preco: 29.99,
    unidades: 10
  };
  console.log(produto2);

  
  type pessoa = {
    nome: string;
    idade: number;
    profissao: string;
  };
  const pessoa1: pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro"
  };
  console.log(pessoa1);