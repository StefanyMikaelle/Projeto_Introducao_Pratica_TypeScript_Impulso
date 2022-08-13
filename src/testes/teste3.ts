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