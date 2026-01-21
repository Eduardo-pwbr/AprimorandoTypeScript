function preencherDados(dados:{
 nome: string; 
 idade: number; 
 profissao: string; }) {

  document.body.innerHTML += `
  <div>
  <h1>${dados.nome}</h1>
  <p>${dados.idade}</p>
  <p>Incluido profissão: ${dados.profissao ? "sim" : "não"}</p>
  </div>`;

}
preencherDados({
  nome: 'Eduardo',
  idade: 30,
  profissao: 'Desenvolvedor'
});
preencherDados({
  nome: 'Ana',
  idade: 25,
  profissao: 'front-end'
});


type categoria =  "comédia" | "drama" | "terror";

function preencherFilme(categoria: categoria) {
  console.log(`O filme é da categoria: ${categoria}`);
}
preencherFilme("comédia");
preencherFilme("drama");
preencherFilme("terror");