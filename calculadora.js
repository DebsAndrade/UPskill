// bjetivo: Combinar variáveis (let/const) e operadores aritméticos (+, -, *, /) para simular uma calculadora.

// Desafio 1: A Calculadora de Preços
// Crie um novo ficheiro calculadora.js.

// Constantes: Defina os valores de entrada (não mudam):

const precoUnitario = 45.99;
const quantidade = 3; 
const taxaIVA = 0.23; // 23%

// Processamento (Passo 1): Calcule o preço total sem IVA. Use let.

let precoSemIVA = precoUnitario * quantidade;

// Processamento (Passo 2): Calcule o valor do IVA.

let valorIVA = precoSemIVA * taxaIVA;

// Processamento (Passo 3): Calcule o preço total com IVA. Use atribuição composta (+=).

let precoTotal = precoSemIVA;
precoTotal += valorIVA;

// Output: Use console.log() para mostrar os três resultados (Sem IVA, Valor IVA, Total com IVA).

console.log("Preço Sem IVA:", precoSemIVA);
console.log("Valor IVA:", valorIVA);
console.log("Preço Total com IVA:", precoTotal);
