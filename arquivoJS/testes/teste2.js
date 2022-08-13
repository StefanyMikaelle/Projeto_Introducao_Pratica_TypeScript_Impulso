"use strict";
let botao = document.getElementById("botao");
let entrada1 = document.getElementById("entrada1");
let entrada2 = document.getElementById("entrada2");
function somarNumeros(numero1, numero2, devePrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(numero1 + numero2);
    }
    return numero1 + numero2;
}
let devePrintar = true;
let frase = "O valor é:";
if (botao) {
    botao.addEventListener("click", () => {
        if (entrada1 && entrada2) {
            console.log(somarNumeros(Number(entrada1.value), Number(entrada2.value), devePrintar, frase));
        }
    });
}
