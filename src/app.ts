// No tsconfig.json - "target": "es2016" - adapta para versoes anteriores
// No tsconfig.json - "outDir": "arquivoJS" - cria pasta para arquivos JS 
// No tsconfig.json - "module": "commonjs"
// No tsconfig.json - "lib": ["es2020","DOM"] - inclui somente bibliotecas especificas
// No index.html - <script src="arquivoJS/app.js" defer ></script>  - alterar essa linha para poder encontrar o arquivo
// No tsconfig.json - "rootDir": "src",  - Passo 1) expecifica que será somente criados arquivos js de dentro dessa pasta
// No tsconfig.json no penultimo } coloca - "rootDir": "src/**/*.ts" - Passo 2) inclui todos os arquivos js

let botaoTeste = document.getElementById('botao');

// "noImplicitAny": false, 
// "strictNullChecks": false,
// function somarImplicitos(parametro1, parametro2){
//     return parametro1 + parametro2
// }

botaoTeste?.addEventListener('click', () => {
    console.log('funcionou');
})