
async function Api() { 
  const response = await fetch("https://api.origamid.dev/json/cursos.json")
  const json = await response.json();
  handleCursos(json);
  
}

Api();

interface Curso{
  nome:string;
  aulas:number;
  gratuito:boolean;
  horas:number;
  idAulas:number[];
  gratutito:boolean;
  nível:"iniciante" | "avançado";
  tags:string[];


 

}
function isCurso (value: unknown): value is Curso{
     if(value && typeof value === "object" && "nome" in value && "horas" && "tags" in value){
        return true;
      }
        else{
          return false
        }
      }


function handleCursos(data: unknown){
  if(Array.isArray(data)) {
    data.filter(isCurso).forEach(item =>{
      document.body.innerHTML +=(`
        <div>${item.nome}</div>
        <div>${item.aulas}</div>
        <div>${item.gratuito}</div>
        `)

    })
   
      

   // console.log(data);
    
    }  
     
 }       
        
        

    

  



