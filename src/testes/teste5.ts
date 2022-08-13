// // Sugestão 1 p/ colocar mais de uma entrada

// function somarValores (entrada1: number | string, entrada2: number | string){
//     if(typeof entrada1 === "string" || typeof entrada2 === "string"){
//         return entrada1.toString()+entrada2.toString();
//     }else{
//         return entrada1 + entrada2;
//     }
    
// }

// Sugestão 2 p/ colocar mais de uma entrada

type entrada = number | string

function somarValores (entrada1: entrada, entrada2: entrada){
    if(typeof entrada1 === "string" || typeof entrada2 === "string"){
        return entrada1.toString()+entrada2.toString();
    }else{
        return entrada1 + entrada2;
    }
    
}

console.log(somarValores(1 , 5));
console.log(somarValores('Olá', ' como vai?'));
console.log(somarValores("1" , 5));
