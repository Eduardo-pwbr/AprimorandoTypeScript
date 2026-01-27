/*function typeGuard(value: any){
  if(typeof value ==="string"){
    return value.toLowerCase()
  }
  if(typeof value ==="number"){
    return value.toFixed()
  }
  if(value instanceof HTMLElement){
    return value.innerText;
  }
}
typeGuard(200)
typeGuard("300")
typeGuard(document.body)


const obj ={
  nome:"Origamid",
}
if("nome" in obj){
  console.log("sim")
}
*/

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();

  handleProdutro(json);
}
interface Produto {
  nome: string;
  preco: number;
}

function handleProdutro(data: any) {
  if ("preco" in data) {
    document.body.innerHTML += `
    <p>Nome:${data.nome}</p>
    <p>Preço: R$ ${data.preco + 100}<p/>
    
    `;
  }
  console.log(data);
}
fetchProduto();
