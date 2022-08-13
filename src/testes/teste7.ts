let  valorQualquerNovamente : any;
valorQualquerNovamente = 3;
valorQualquerNovamente = "teste"
valorQualquerNovamente = 5;

let  stringTeste1 : string = "verificar"
stringTeste1 = valorQualquerNovamente;

let  naoSabevalor : unknown;
naoSabevalor = 3;
naoSabevalor = 'opa';
naoSabevalor = true;
naoSabevalor = 'vai sim';

let stringTeste2 : string = "agora vai"


if (typeof naoSabevalor === 'string'){
    stringTeste2 = naoSabevalor;
}

// também tem o never que nunca seria rodado

function jogaErro (erro: string, codigo: number ): void{
    throw {error: erro, code:codigo}
}

jogaErro('deu erro', 500 )