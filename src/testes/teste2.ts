let botao = document.getElementById("botao");
let entrada1 = document.getElementById("entrada1") as HTMLInputElement;
let entrada2 = document.getElementById("entrada2") as HTMLInputElement;

function somarNumeros (numero1 : number, numero2 : number, devePrintar : boolean, frase: string){
	let resultado = numero1 + numero2
    if(devePrintar){
        console.log(numero1+numero2);
    }
		return numero1 + numero2
}

let devePrintar = true;
let frase = "O valor é:"

if (botao){
    botao.addEventListener ("click", ()  => {
        if (entrada1 && entrada2){
	    console.log(somarNumeros(Number(entrada1.value), Number(entrada2.value), devePrintar, frase));
        }
})

}
