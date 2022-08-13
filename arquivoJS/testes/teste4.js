"use strict";
let valorQualquer;
valorQualquer = 2;
valorQualquer = "oi";
valorQualquer = true;
let valorString1 = 'teste';
valorString1 = valorQualquer;
let valorString2 = 'testao';
valorString2 = valorQualquer;
// desvantagem do tipo any é que não verifica os tipos que é a principal vantagem do TypeScript
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString1, valorString2);
somarString('Olá', ' como vai?');
