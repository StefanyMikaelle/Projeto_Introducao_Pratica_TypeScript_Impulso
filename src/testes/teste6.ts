// // Sugestão 1
// function somarValoresNumericos (numero1: number, numero2: number){
//     //return numero1 + numero2.toString();
//     return numero1 + numero2;
// }

// console.log(somarValoresNumericos(1,3));

// function printaValoresNumericos (numero1: number, numero2 : number){
//     console.log(numero1 + numero2)
// } 

// Sugestão 2

function printarValoresNumericos (numero1: number, numero2: number): void{
    console.log(numero1 + numero2)
}
// callback é mandada como parametro quando uma certa ação ocorrer
function somarValoresNumericosETratar (numero1: number, numero2: number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado (numero:number): number{
    return numero*numero;
}

function dividirPorEleMesmo (numero:number): number{
    return numero/numero;
}

console.log(somarValoresNumericosETratar(1,3,aoQuadrado));
console.log(somarValoresNumericosETratar(1,3,dividirPorEleMesmo));