const aluno = {
    nome: "João",
    idade: 20,
    curso: "Engenharia",
    turma: "2025A",
    saudacao: function() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    },
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        cidade: "João Pessoa",
        estado: "PB"
    },
};

aluno.saudacao();

console.log(aluno.curso);
console.log(`Curso atual: ${aluno["curso"]}`);

aluno.turma = "2025B";

console.log(`Turma atualizada: ${aluno.turma}`);

aluno.idade = 21;

console.log(`Idade atualizada: ${aluno.idade}`);

aluno.saudacao();

delete aluno.curso;

console.log("Curso removido:", aluno);

console.log("Endereço completo:", aluno.endereco);
console.log("Cidade:", aluno.endereco.cidade);

console.log("\nPropriedades do objeto aluno usando for...in:");
for (let chave in aluno) {
    console.log(`${chave}: ${aluno[chave]}`);
}
