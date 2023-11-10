const alunos = ['Clóvis', 'Gabriel', 'Bruno', "William", 'Mateus', 'Wellington', 'Adriano']

const alunos2 = alunos.map(function(itemAtual){
    return{
        nome: itemAtual,
        nota: Math.floor(Math.random() * 10) + 1
    }
})

function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovadosArray = alunosAprovados(alunos2);

console.log(alunosAprovadosArray);