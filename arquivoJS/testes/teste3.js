"use strict";
const pessoa = {
    nome: 'Stefany',
    idade: 26,
    profissao: 'Desenvolvedora, Técnica  e Engenheira '
};
pessoa.idade = 27;
const pedro = {
    nome: 'Pedro Henrique',
    idade: 3,
    profissao: 'Motivador'
};
const paulo = {
    nome: 'Paulo Henrique',
    idade: 29,
    profissao: 'Tecnico '
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedora"] = 0] = "Desenvolvedora";
    Profissao[Profissao["T\u00E9cnico"] = 1] = "T\u00E9cnico";
    Profissao[Profissao["T\u00E9cnica"] = 2] = "T\u00E9cnica";
    Profissao[Profissao["Contador"] = 3] = "Contador";
    Profissao[Profissao["Estudante"] = 4] = "Estudante";
    Profissao[Profissao["Engenheira"] = 5] = "Engenheira";
    Profissao[Profissao["Motivador"] = 6] = "Motivador";
})(Profissao || (Profissao = {}));
const adonis = {
    nome: 'Adonis',
    idade: 39,
    profissao: Profissao.Contador
};
const melissa = {
    nome: 'Melissa',
    idade: 13,
    profissao: Profissao.Estudante,
    materias: ['Português', 'Matemática']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(melissa.materias);
