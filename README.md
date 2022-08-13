# Projeto_Introducao_Pratica_TypeScript_Impulso

# 1º Passo: Criar um projeto Node
- cria um novo terminal powershell
-digita o comando no terminal npm init para criar um novo projeto node
- clica em enter até finalizar e surgir a mesma linha de comando
# 2º Passo: Instalar como dependência de desenvolvimento o TypeScript
-digita o comando terminal npm install --save-dev typescript
# 3º Passo: Instalar o lite-server
-digita o comando terminal npm install lite-server --save-dev
# 4º Passo: Criar um script no arquivo package.json
- digita o comando   "start": "lite-server"
Ficando dessa forma abaixo:
{
  "name": "typescript_projeto",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^4.7.4"
  }
}
# 4º Passo: Criar um arquivo index.html
- digita o comando:
<script src="app.js" defer ></script>
 para rodar o JS após o HTML o termo defer irá garantir isso.
- definir as entradas e botões, digita o comando:
<input id="entrada1">
 <input id="entrada2">
 <button id="botao">Clique aqui!</button>


Ficando dessa forma abaixo:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="app.js" defer ></script> 

    <input id="entrada1">
    <input id="entrada2">
    <button id="botao">Clique aqui!</button>
</head>
<body>
    
</body>
</html>

# 5º Passo: Criar um arquivo app.js (Teste 1)
- Faz o primeiro teste escrevendo no arquivo
// Teste 1
console.log("Estou vinculado ao index.html")
- Depois digita no terminal powershell 
npm start
**Deu erro fiz alterações seguindo esse vídeo
https://www.youtube.com/watch?v=LBTQA-esQc4
### mesmo assim deu esse erro:
 
**Deu erro fiz alterações seguindo esse vídeo
https://www.youtube.com/watch?v=daneIkrlAZ4
### saiu o erro pelo que entendi esse erro é ficticio= dummy 
SOLUCIONADO ESSE ERRO!
# 6º Passo: Criar um arquivo app.js (Teste 2) - Aplicação de somar
//Teste 2
let botao = document.getElementById("botao");
let entrada1 = document.getElementById("entrada1");
let entrada2 = document.getElementById("entrada2");

function somarNumeros (numero1, numero2){
	if(typeof numero1 === "number" && typeof numero2 === "number"  ){
		return numero1 + numero2
	} else{
		return Number (numero1) + Number (numero2) 
	}
}
botao.addEventListener ("click", ()  => {
	console.log(somarNumeros(entrada1.value, entrada2.value));
})
## renomeei arquivo para testes.js depois criei e coloquei na pasta exemplos
#7º Passo: Criar um arquivo app.ts (criar aplicação somar usando TypeScript)
## observação comentar tudo é: ctrl +K+C e descomentar é : ctrl +K+U
- copiei o trecho abaixo:
let botao = document.getElementById("botao");
let entrada1 = document.getElementById("entrada1");
let entrada2 = document.getElementById("entrada2");
- depois digitei o comando no terminal tsc --init 
## Teve esse erro abaixo:
 
## Segui o passo-a-passo sugerido por Robelio Santos
 
 
 
 
SOLUCIONADO ESSE ERRO GRAÇAS A ROBELIO (ALELUIA)!
O código ficou dessa forma, abaixo:
let botao = document.getElementById("botao");
let entrada1 = document.getElementById("entrada1") as HTMLInputElement;
let entrada2 = document.getElementById("entrada2") as HTMLInputElement;

function somarNumeros (numero1 : number, numero2 : number){
	
		return numero1 + numero2
}
if (botao){
    botao.addEventListener ("click", ()  => {
        if (entrada1 && entrada2){
	    somarNumeros(Number(entrada1.value), Number(entrada2.value));
        }
})

}
# 8º Passo: Abrir arquivo package.json (p/ atualizar o JavaScript)
- digitar     tsc --watch no terminal powershell
** Esse comando é para sempre se atualize o JavaScript
Então o código ficou dessa maneira abaixo:

{
  "name": "typescript_projeto",
  "version": "1.0.0",
  "description": "",
  "main": "index.html",
  "scripts": {
    "start": "npm run lite",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lite":"lite-server",
    "watch": "tsc --watch"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "lite-server": "^2.6.1",
    "typescript": "^4.7.4"
  }
}

- depois digitei no terminal powershell npm watch
- depois digitei no terminal powershell npm run watch

## teve o erro que esqueceu de colocar console.log no app.ts
O código já consertado, ficou da forma abaixo

let botao = document.getElementById("botao");
let entrada1 = document.getElementById("entrada1") as HTMLInputElement;
let entrada2 = document.getElementById("entrada2") as HTMLInputElement;

function somarNumeros (numero1 : number, numero2 : number){
	
		return numero1 + numero2
}
if (botao){
    botao.addEventListener ("click", ()  => {
        if (entrada1 && entrada2){
	    console.log(somarNumeros(Number(entrada1.value), Number(entrada2.value)));
        }
})

}
# 9º Passo: Fazendo novas mudanças no arquivo package.json 
** O que está em roxo são as alterações feitas
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
- renomeei para teste2 e coloquei na pasta testes
# 10º Passo: Fazendo segundo exemplo de TypeScript
**O atalho Ctrl + barra mostra todas as opções que são esperadas que foram padronizadas  pela interface
const pessoa = {
    nome : 'Stefany',
    idade: 26,
    profissao: 'Desenvolvedora, Técnica  e Engenheira '
}

pessoa.idade = 27;

const pedro : {nome: string, idade: number, profissao: string} = {
    nome: 'Pedro Henrique', 
    idade: 3,
    profissao:'Motivador'
}

const paulo : {nome: string, idade: number, profissao: string} = {
    nome: 'Paulo Henrique', 
    idade: 29,
    profissao:'Tecnico '
}

enum Profissao{
    Desenvolvedora,
    Técnico ,
    Técnica,
    Contador,
    Estudante,
    Engenheira,
    Motivador
}

interface Pessoa{
    nome: string, 
    idade: number, 
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[]
}
const adonis : Pessoa = {
    nome: 'Adonis', 
    idade: 39,
    profissao: Profissao.Contador
}
const melissa : Estudante = {
    nome:'Melissa',
    idade: 13,
    profissao: Profissao.Estudante,
    materias:['Português', 'Matemática']

}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ',item);

    }
}

listar(melissa.materias);
# 11º Passo: Fazendo terceiro  exemplo de TypeScript (ANY)
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

# 12º Passo: Fazendo quarto  exemplo de TypeScript (Colocar mais de um tipo na entrada)
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
# 13º Passo: Fazendo quinto  exemplo de TypeScript (Colocar de erros void e never)

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
# 14º Passo: Manipulação de bibliotecas e pastas
- no arquivo app.ts
// No tsconfig.json - "target": "es2016" - adapta para versoes anteriores
// No tsconfig.json - "outDir": "arquivoJS" - cria pasta para arquivos JS 
// No tsconfig.json - "module": "commonjs"
// No tsconfig.json - "lib": ["es2020","DOM"] - inclui somente bibliotecas especificas
// No index.html - <script src="arquivoJS/app.js" defer ></script>  - alterar essa linha para poder encontrar o arquivo
// No tsconfig.json - "rootDir": "src",  - Passo 1) expecifica que será somente criados arquivos js de dentro dessa pasta
// No tsconfig.json no penultimo } coloca - "rootDir": "src/**/*.ts" - Passo 2) inclui todos os arquivos js

let botaoTeste = document.getElementById('botao');

botaoTeste?.addEventListener('click', () => {
    console.log('funcionou');
})
- digitando no terminal powerShell tsc teste.ts , cria somente o arquivo fora
