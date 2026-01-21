let imprimirValor: string | number = 200;
imprimirValor = "4000";
//total = true; // Erro de tipo, pois total só pode ser string ou number

function isnumber(value: string | number){
  if(typeof value === "number"){
    return true;
  }
  return false;

}
if(isnumber("200")){
console.log("É um numero"); // true
}

// Exemplo
//const button = document.querySelector("button");
//button?.click();