// Exercício 01 - Extrair só os nomes usando map().

const pessoas = [
    { nome: 'Ana', idade: 15, morada: 'Aveiro' },
    { nome: 'Carlos', idade: 10, morada: 'Braga' },
    { nome: 'Débora', idade: 30, morada: 'Lisboa' },
    { nome: 'Bruno', idade: 35, morada: 'Porto' },
    { nome: 'Eva', idade: 17, morada: 'Setúbal' },
    { nome: 'Gabi', idade: 28, morada: 'Almada' },
    { nome: 'Daniel', idade: 40, morada: 'Faro' }
];
const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);

// Exercício 02 - adicionar nova propriedade usando map().

const pessoasAdultas = pessoas.map(pessoa => ({ ...pessoa, adulta: pessoa.idade >= 18 }));
console.log(pessoasAdultas);

// Exercício 03 - Filtrar pessoas adultas usando filter().

const apenasAdultos = pessoas.filter(pessoa => pessoa.idade >= 25);
console.log(apenasAdultos);

// Exercício 04 - Procurar por nome específico usando filter().

function buscarPorNome(arr, nome) {
    return arr.filter(pessoa => pessoa.nome === nome);    
}
const resultadoDaBusca = buscarPorNome(pessoas, 'Bruno');
console.log(resultadoDaBusca);
const resultadoDaBusca2 = buscarPorNome(pessoas, 'Ana');
console.log(resultadoDaBusca2);

// Exercício 05 - Converter em frases usando map().

const frases = pessoas.map(pessoa => `${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.morada}.`);
console.log(frases);

// Exercício 06 - Calcular a idade média usando reduce().

const idadeMedia = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0) / pessoas.length;
console.log(idadeMedia);

// Exercício 07 - Soma total das idades usando reduce().

const somaIdades = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0);
console.log(somaIdades);

// Exercício 08 - Contar adultos usando filter + length.

const numeroDeAdultos = pessoas.filter(pessoa => pessoa.idade >= 18).length;
console.log(numeroDeAdultos);

// Exercício 09 - Listar nomes de pessoas com idade ímpar.

const nomesIdadeImpar = pessoas.filter(pessoa => pessoa.idade % 2 !== 0).map(pessoa => pessoa.nome);
console.log(nomesIdadeImpar);

// Exercício 10 - Verificar se todas as pessoas são adultas usando every().

const todasPessoasAdultas = pessoas.every(pessoa => pessoa.idade >= 18);
console.log(todasPessoasAdultas);

if (!todasPessoasAdultas) {
    console.log("Nem todas as pessoas são adultas.");
}
