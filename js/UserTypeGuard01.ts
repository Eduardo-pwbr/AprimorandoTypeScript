async function Apifetch() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json")
    const json = await response.json();
    handleCursos(json);
  
}

Apifetch();

function handleCursos(data:any){

  if(data instanceof Array)
  {
    console.log("È uma instância de Array")
  }
  if(Array.isArray(data)){
     console.log("É array");
  }
 console.log(data)
  
 


}

