let valorQualquer : any;
valorQualquer = 2;
valorQualquer = "oi";
valorQualquer = true;

let valorString1 : string = 'teste';
valorString1 = valorQualquer;
let valorString2 : string = 'testao';
valorString2 = valorQualquer;

// desvantagem do tipo any é que não verifica os tipos que é a principal vantagem do TypeScript

function somarString (string1: string, string2: string){
    console.log(string1+string2);
}

somarString(valorString1,valorString2);
somarString('Olá',' como vai?');