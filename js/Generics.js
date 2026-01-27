"use strict";
/*function retornoGenerics<variavel>(a:variavel): variavel {
    return a;
}*/
/*function retornoGenerics<string>(a: string): string {
    return a;
}
function retornoGenerics<number>(a: number): number {
    return a;
}
function retornoGenerics<boolean>(a: boolean): boolean {
    return a;
}*/
// Testando a função com diferentes tipos de dados usando Generics
//ela pode retornar qualquer tipo de dado, só é necessário informar o tipo ao chamar a função
/*console.log(retornoGenerics<string>("Olá Mundo"));
console.log(retornoGenerics(1234));
console.log(retornoGenerics(true));*/
const listanumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const frutas = ['Banana', 'Maçã', 'Laranja', 'Uva', 'Abacaxi', 'Manga', 'Morango'];
const listaValores = ['Banana', 1, 'morango', 2, 'pera', 3, 'jabuticaba', 4, 'melão'];
/*function retornarArray<tipo>(arr: tipo[]): tipo[] {
    return arr;
}*/
function retorno(lista) {
    return lista.slice(0, 5);
}
function retornalista(lista) {
    return lista.slice(0, 4);
}
//console.log(retornarArray<number>(numeros));
//console.log(retornarArray<string>(frutas));
console.log(retorno(listanumeros));
console.log(retorno(frutas));
console.log(retornalista(listaValores));
console.log(retornalista(listaValores).map(item => item));
//outro exemplo de generics
function notnull(arg) {
    if (arg !== null) {
        return arg;
    }
    else {
        return null;
    }
}
notnull("Eduardo")?.toLowerCase();
notnull(200)?.toFixed();
function tipoDados(arg) {
    const resultado = { dados: arg, tipo: typeof arg };
    console.log(resultado);
    return typeof (arg);
}
tipoDados(true);
tipoDados(1234);
tipoDados("Teste");
tipoDados([1, 2, 3]);
