async function apiFetch() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  console.log(data[0]);
  showListaCurso(data);
}
apiFetch();

// Definindo a interface para definir objeto 'Curso'

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: "iniciante" | "intermediario" | "avancado";
  logo: string;
  certificado: boolean;
  descricao: string;
  categorias: string;
}

function showListaCurso(data: Curso[]) {
  data.forEach((curso) => {
    let color;

    if (curso.nivel === "iniciante") {
      color = "green";

    } else if (curso.nivel === "intermediario") {
      color = "orange";
    } else {
      color = "red";
    }
    document.body.innerHTML += `
    <div> 
    <h1>${curso.nome}</h1>
    <p style="font-family: Arial, sans-serif;">Horas: ${curso.horas}</p>  
    <h3 style="color: ${color}">Nível: ${curso.nivel}</h3>
    <p>Gratuito: ${curso.gratuito ? "Sim" : "Não"}</p>
    <h3>tags: ${curso.tags.join(", ")}</h3>
    <p>aulas: ${curso.idAulas.join(", ")}</p>

    </div>


  `;
  });
}
