// Passo 1: MOSTRAR a mensagem de boas-vindas
  console.log("Olá! Sou a Débora Ellen Oliveira de Andrade!");
  console.log("Tenho " + (20 + 10) + " anos");
  console.log("Gosta de Programar?");
  console.log(true);
  console.log("A aula de hoje foi a " + 3 + " e foi sobre configuração do ambiente e bases do JavaScript.");

  // Passo 2: Mostrar a soma (Processamento Simples)
  console.log(10 + 5); 
  console.log(10 * 5);

  // Passo 3: Mostrar um valor Booleano (revisão da Aula 1)
  console.log(true);

 // Aula4 - Variáveis e Tipos de Dados

// Declarar uma constante
const nomeAluna = "Débora Andrade";
console.log("Nome da aluna: " + nomeAluna);

// Declarar uma variável
// let contador = 1;
// console.log("Contador inicial: " + contador);
// // Atualizar o valor da variável
// contador = contador + 1;
// console.log("Contador atualizado: " + contador);

// Tipos de dados
const idade = 30; // Número
const altura = 1.65; // Número
const gostaDeProgramar = true; // Booleano
const linguagemFavorita = "JavaScript"; // String

// Operador tipo typeof
console.log("Tipo de dado de idade: " + typeof idade);
console.log("Tipo de dado de altura: " + typeof altura);
console.log("Tipo de dado de gostaDeProgramar: " + typeof gostaDeProgramar);
console.log("Tipo de dado de linguagemFavorita: " + typeof linguagemFavorita);

// Conversão de tipos automática
const resultado1 = "10" + 5; // Concatenação
console.log("Resultado de '10' + 5: " + resultado1);

const resultado2 = "10" - 5; // Subtração
console.log("Resultado de '10' - 5: " + resultado2);

// Conversão de tipos explícita
const numeroString = "20";
const numeroConvertido = Number(numeroString);
console.log("Número convertido: " + numeroConvertido);
console.log("Tipo de dado após conversão: " + typeof numeroConvertido);

// Interação com o usuário
let nome = prompt("Qual é o seu nome?");
console.log("Olá, " + nome + "!");

// Converter input para número
let idadeUsuario = prompt("Quantos anos você tem?");
idadeUsuario = Number(idadeUsuario);
console.log("Você tem " + idadeUsuario + " anos.");

// Verificar tipo de dado do input convertido
console.log("Tipo de dado da idade do usuário: " + typeof idadeUsuario);

// I. Prática Livre no VSCode
// Objetivo: Aplicar let/const, Number, String e lógica de cálculo (Processamento) para resolver um problema simples.

// Desafio: Cálculo de Média Simples
// Queremos criar um algoritmo simples para calcular a média de 3 notas de um aluno.

// Passos a Implementar (no seu ficheiro app.js):

// Declaração (Constantes): Use const para definir as notas do aluno (Assuma que as notas são dadas).

const nota1 = 15;
const nota2 = 18;
const nota3 = 12;
// Processamento (Variável): Use let para calcular a soma total das notas e use-o para calcular a média.

let soma = nota1 + nota2 + nota3;
let media = soma / 3;

// Output (Saída): Use console.log() para mostrar os resultados de forma clara.

// Mostrar a soma total
console.log("Soma das Notas:", soma);

// Mostrar a média final
console.log("Média Final do Aluno:", media);
// Verificação Booleana: Use uma const para criar uma variável Booleana que verifique se a média é superior ou igual a 10.

const passou = media >= 10;
console.log("O aluno passou à disciplina?", passou);

