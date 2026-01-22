

 async function ApiFetch(){
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();

  console.log(data); 
  showData(data);
  
}

ApiFetch();

// Definindo a interface para definir objeto 'Produto'
interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}


interface Produto {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcdidentes: boolean;
  empresaFabricante:Empresa;
  empresaMontadora:Empresa;
}


function showData(data:Produto){


 document.body.innerHTML = `
 <div>
 <h1>${data.nome}</h1>
 <p>${data.preco}</p>
 <p>${data.descricao}</p>
 <p>${data.garantia}</p>
 <p>${data.seguroAcdidentes ? "Possui seguro contra acidentes" : "Não possui seguro contra acidentes"}</p>
 <h2>Empresa Fabricante</h2>
 <p>Nome: ${data.empresaFabricante.nome}</p>
 <p>Fundação: ${data.empresaFabricante.fundacao}</p>
 <p>País: ${data.empresaFabricante.pais}</p>
 <h2>Empresa Montadora</h2>
 <p>Nome: ${data.empresaMontadora.nome}</p>
 <p>Fundação: ${data.empresaMontadora.fundacao}</p>
 <p>País: ${data.empresaMontadora.pais}</p>

 </div>
 `;
}



