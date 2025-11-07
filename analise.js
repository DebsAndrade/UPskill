// Exercício 1: Identificação de Tipos e Nomenclatura
// Tarefa: Para cada linha de código abaixo, escreva um console.log(typeof ...) para confirmar o tipo de dados resultante.

const nomePrimeiraAula = "Algoritmos";	
let numeroDeAlunos = 15;	
let estaFrio = false;	
const valor = "10" + 20;	
let anoFuturo = 2025 - 5;	
let valorVazio = null;

console.log(typeof nomePrimeiraAula);
console.log(typeof numeroDeAlunos);
console.log(typeof estaFrio);
console.log(typeof valor);
console.log(typeof anoFuturo);
console.log(typeof valorVazio);

// Exercício 2: Conversões e Armadilhas (+ vs -)
// Tarefa: Preveja o resultado no console para os seguintes blocos. Depois, implemente o código para verificar os resultados e os tipos de dados resultantes.

// Bloco A: A Armadilha da Adição
let a = 10;
let b = "5";
let c = 2;

console.log("Resultado de 10 + '5':", a + b); 
console.log("Tipo resultante:", typeof (a + b)); 
console.log("Resultado de 10 + '5' + 2:", a + b + c);

// Bloco B: A Força da Subtração
let x = "50";
let y = "10";
let z = 5;

console.log("Resultado de '50' - '10':", x - y); 
console.log("Tipo resultante:", typeof (x - y)); 
console.log("Resultado de '50a' * 2:", "50a" * 2);

// Exercício 3: Corrigir a Lógica Booleana
// Cenário: Queremos que o programa diga true se a nossa variável saldo for suficiente para comprar um item.
// Tarefa: Preencha o espaço em branco para que o console.log(possoComprar) seja true.

// Valores iniciais:
const saldo = 50; 
const precoItem = 35;

const possoComprar = (saldo >= precoItem); 

console.log("Posso comprar o item?", possoComprar); 
