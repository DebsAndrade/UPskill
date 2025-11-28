// Ex 1 - Encontrar primeira pessoa com idade maior que 25 usando find().

const pessoas = [
    { nome: 'Ana', idade: 15, morada: 'Aveiro' },
    { nome: 'Carlos', idade: 10, morada: 'Braga' },
    { nome: 'Débora', idade: 30, morada: 'Lisboa' },
    { nome: 'Bruno', idade: 35, morada: 'Porto' },
    { nome: 'João', idade: 17, morada: 'Setúbal' },
    { nome: 'Gabi', idade: 28, morada: 'Almada' },
    { nome: 'Daniel', idade: 40, morada: 'Faro' }
];

const primeiraPessoaMaior25 = pessoas.find(pessoa => pessoa.idade > 25);
console.log(`Primeira pessoa com idade maior que 25 é a ${primeiraPessoaMaior25.nome} e ela tem ${primeiraPessoaMaior25.idade} anos e mora em ${primeiraPessoaMaior25.morada}.`);


// Ex 2 - Verificar se existe pessoas menores de idade usando o some().

const existeMenorIdade = pessoas.some(pessoa => pessoa.idade < 18);
console.log(`Existe pessoas menores de idade? ${existeMenorIdade}`);

// Ex 3 - Verificar se todas as pessoas são adultas usando every().

const todasAdultas = pessoas.every(pessoa => pessoa.idade >= 18);
console.log(`Todas as pessoas são adultas? ${todasAdultas}`);

// Ex 4 - Verificar se array de nomes inclui "João" includes() e map().

console.log(pessoas.includes('João'));
const nomes = pessoas.map(pessoa => pessoa.nome).includes('João');
console.log(`O array de nomes inclui "João"? ${nomes}`);

// OBS: O includes() não pode ser usado diretamente em arrays de objetos porque ele compara referências, e não os valores dos objetos. Para verificar se um objeto existe (ou se um objeto com determinadas propriedades existe) num array de objetos, deve usar o método some() com uma função de comparação que verifique as propriedades de cada objeto. 
// Porquê includes() não funciona com objetos 
// Compara referências: includes() verifica se uma referência específica está presente no array. Dois objetos, mesmo com as mesmas propriedades e valores, têm referências de memória diferentes e, por isso, includes() considera-os diferentes.

// Ex 5 - Ordernar por idade descrescente usando sort().

const pessoasOrdenadasPorIdadeDesc = [...pessoas].sort((a, b) => b.idade - a.idade);
// const pessoasOrdenadasPorIdadeDesc = pessoas.sort((a, b) => b.idade - a.idade);
console.log('Pessoas ordenadas por idade (descrescente):');
console.log(pessoasOrdenadasPorIdadeDesc);

// Ex 6 - Remover pessoas no índice 1 e 3 usando splice(). sem o uso do spread operator.

const pessoasParaSplice = pessoas;
pessoasParaSplice.splice(3, 1); // Remove a pessoa no índice 3
pessoasParaSplice.splice(1, 1); // Remove a pessoa no índice 1
console.log('Array após remover pessoas nos índices 1 e 3 usando splice():');
console.log(pessoasParaSplice);


// Exemplo pra entender o spread operator.
const car = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const car_more = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const mycar = {...car, ...car_more}
console.log(mycar);


// Ex 7 - Clonar array de objetos usando o slice().

const pessoasClonadas = pessoas.slice();
console.log('Array clonado usando slice():');
console.log(pessoasClonadas);

// Ex 8 - Adicionar nova pessoa com push().

const novaPessoa = { nome: 'Mariana', idade: 22, morada: 'Coimbra' };
pessoas.push(novaPessoa);
console.log('Array após adicionar nova pessoa com push():');
console.log(pessoas);

// Ex 9 - Remover a primeira pessoa com shift().

const pessoaRemovida = pessoas.shift();
console.log(`Pessoa removida com shift(): ${pessoaRemovida.nome}`);
console.log('Array após remover a primeira pessoa:');
console.log(pessoas);

// Ex 10 - Adicionar nova pessoa no início com unshift().

const outraNovaPessoa = { nome: 'Ricardo', idade: 27, morada: 'Viseu' };
pessoas.unshift(outraNovaPessoa);
console.log('Array após adicionar nova pessoa no início com unshift():');
console.log(pessoas);

