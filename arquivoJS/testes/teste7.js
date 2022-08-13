"use strict";
let valorQualquerNovamente;
valorQualquerNovamente = 3;
valorQualquerNovamente = "teste";
valorQualquerNovamente = 5;
let stringTeste1 = "verificar";
stringTeste1 = valorQualquerNovamente;
let naoSabevalor;
naoSabevalor = 3;
naoSabevalor = 'opa';
naoSabevalor = true;
naoSabevalor = 'vai sim';
let stringTeste2 = "agora vai";
if (typeof naoSabevalor === 'string') {
    stringTeste2 = naoSabevalor;
}
// também tem o never que nunca seria rodado
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
