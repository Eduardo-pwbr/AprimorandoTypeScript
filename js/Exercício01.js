"use strict";
const input = document.querySelector("input");
const total = localStorage.getItem("total");
input.value = total ? total : "0";
calculoGanho(Number(input.value));
function calculoGanho(value) {
    const p = document.querySelector("p");
    p.innerText = `Ganho aproximado: R$ ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    const number = Number(input.value);
    localStorage.setItem("total", String(number));
    calculoGanho(number);
}
input.addEventListener("keyup", totalMudou);
