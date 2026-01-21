//@ts-check

//anotação de tipos em arrays

const  produtos = [
  { nome: 'Camisa', preco: 20 },
  { nome: 'Bermuda', preco: 25 },
  { nome: 'Tênis', preco: 80 },
 ];

 function filtraLivros(dados: { nome: string; preco: number }[]) {
  return dados.filter((item) => item.preco === 25);
 }

 console.log(filtraLivros(produtos));