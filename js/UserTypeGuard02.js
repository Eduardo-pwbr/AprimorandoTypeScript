"use strict";
async function Api() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
}
Api();
function isCurso(value) {
    if (value && typeof value === "object" && "nome" in value && "horas" && "tags" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach(item => {
            document.body.innerHTML += (`
        <div>${item.nome}</div>
        <div>${item.aulas}</div>
        <div>${item.gratuito}</div>
        `);
        });
        // console.log(data);
    }
}
