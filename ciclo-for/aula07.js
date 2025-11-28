// Demonstrar cada componente do for (i=0, i<5, i++):
console.log("--- Contagem Simples ---");
for (let i = 0; i < 5; i++) {
    // i vai de 0, 1, 2, 3, 4
    console.log("Iteração número:", i);
}

// Mostrar como inverter o fluxo usando decremento e a condição oposta:
console.log("\n--- Contagem Regressiva ---");
for (let j = 5; j >= 1; j--) { // j-- é o mesmo que j = j - 1
    console.log("Lançamento em:", j);
}
console.log("FOGO!");

// Usar o operador de atribuição composta (+=) para alterar o passo:
console.log("\n--- Contar de 3 em 3 ---");
for (let k = 0; k <= 15; k += 3) {
    console.log("Valor:", k);
}

// Somatória e acumulação de valores pares:
// Demonstrar a necessidade de declarar a variável acumuladora fora do ciclo:

let totalCusto = 0;
const numItens = 4;
const custoItem = 15;

for (let i = 0; i < numItens; i++) {
    console.log(totalCusto);
    totalCusto += custoItem; // totalCusto = totalCusto + 15
    console.log(`Item ${i + 1} adicionado. Total provisório: ${totalCusto}`);
}

console.log("\nCusto Final:", totalCusto);

// Usar o operador Módulo (%) e o if para filtrar números ímpares:
console.log("\n--- Números Ímpares de 1 a 10 ---");
for (let x = 1; x <= 10; x++) {
    if (x % 2 !== 0) { // Se o resto da divisão por 2 NÃO for zero (é ímpar)
        console.log(x);
    }
}

// Combinar acumulador e filtragem ao mesmo tempo, para somar apenas os números pares de 1 a 10:
let somaPares = 0;
for (let i = 1; i <= 10; i++) {
    console.log("\nNúmero atual:", i);
    if (i % 2 === 0) {
        console.log("\nNúmero par encontrado:", i);
        somaPares += i; // somaPares = somaPares + i
        console.log("\nSoma provisória dos pares:", somaPares);
    }
}
console.log("\nSoma dos pares de 1 a 10:", somaPares);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 20; i >= 10; i--) {
    console.log("\n", i);
}

for (let i = 0; i <= 50; i += 5) {
    console.log("\n", i);
}

let totalSoma = 0;
for (let i = 1; i <= 5; i++) {
    console.log("\nContador atual:", i);
    totalSoma += i;
}
console.log("\nTotal:", totalSoma);

// Tarefa: Defina const base = 2; e const expoente = 4;. Defina um acumulador let resultado = 1;.
// Use um ciclo for para multiplicar a base por si mesma o número de vezes do expoente.
// Dica: O ciclo deve iterar 4 vezes, e dentro dele use resultado *= base;. Imprima o resultado final (deve ser 16).
const base = 2;
const expoente = 4;
let resultado = 1;

for (let i = 0; i < expoente; i++) {
    console.log(`\nIteração ${i + 1}:`, resultado);
    resultado *= base; // resultado = resultado * base
}
console.log(`\nResultado de ${base} elevado a ${expoente} é: ${resultado}`);

// Tarefa: Crie um ciclo for que conte de 1 a 30.
// Dentro do ciclo, use um if e o operador módulo (%) para imprimir apenas os números que são múltiplos de 4.
console.log("\n--- Múltiplos de 4 entre 1 e 30 ---");
for (let i = 1; i <= 30; i++) {
    if (i % 4 === 0) {
        console.log(i);
    }
}

// Tarefa: Defina dois acumuladores: let pares = 0; e let impares = 0;.
// Crie um ciclo for que conte de 1 a 10.
// Dentro do ciclo, use um if/else para:
// Se for par, incremente pares++.
// Se for ímpar, incremente impares++.
// No final, imprima os totais: "Total de Pares: X" e "Total de Ímpares: Y".
let pares = 0;
let impares = 0;
let n = Number(prompt("Digite um número para definir o limite da contagem:"));

for (let i = 1; i <= n; i++) {
    console.log(`\nNúmero atual: ${i}`);
    if (i % 2 === 0) {
        pares++;
        console.log(`O número ${i} é Par. Total de Pares até agora: ${pares}`);
    } else {
        impares++;
        console.log(`O número ${i} é Ímpar. Total de Ímpares até agora: ${impares}`);
    }
}
console.log(`\nTotal de Pares: ${pares}`);
console.log(`Total de Ímpares: ${impares}`);

// Tarefa: Use um ciclo for que conte de 0 a 10 (temperatura em Celsius).
// Dentro do ciclo, calcule e imprima o valor correspondente em Fahrenheit.
// Fórmula: $F = (C \times 1.8) + 32$
// Exemplo de Output: "0ºC é 32ºF"
console.log("\n--- Conversão de Celsius para Fahrenheit ---");

for (let celsius = 0; celsius <= 10; celsius++) {
    let fahrenheit = (celsius * 1.8) + 32;
    console.log(`${celsius}ºC é ${fahrenheit}ºF`);
}

// Use uma constante const tabuada = 7;.
// Crie um ciclo for que conte de 1 a 10.
// Dentro do ciclo, use console.log() para imprimir a tabuada completa, no formato: 7 x 1 = 7 7 x 2 = 14 ...
const tabuada = 7;
console.log("\n--- Tabuada do 7 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}

// Queremos calcular a soma de idades de 5 pessoas.
// Defina um acumulador let somaIdades = 0;.
// Defina uma constante const numPessoas = 5;.
// Dentro do ciclo for (que irá correr 5 vezes):
// Simule a idade de cada pessoa (const idade = 20; - pode usar sempre o mesmo valor).
// Use a atribuição composta para somar a idade a somaIdades.
// Imprima a somaIdades final e, por fim, imprima a média final ($\text{Média} = \text{Soma} / \text{numPessoas}$).
let somaIdades = 0;
const numPessoas = 5;

for (let i = 0; i < numPessoas; i++) {
    const idade = Number(prompt(`Digite a idade da pessoa ${i + 1}:`)); // Simulando a idade
    console.log(`\nPessoa ${i + 1} tem ${idade} anos.`);
    somaIdades += idade; // somaIdades = somaIdades + idade
    console.log(`Soma provisória das idades: ${somaIdades}`);
}

const mediaIdades = somaIdades / numPessoas;
console.log(`\nSoma total das idades: ${somaIdades}`);
console.log(`Média das idades: ${mediaIdades}`);

// Tarefa: Defina uma string vazia let resultadoString = "";.
// Crie um ciclo for que conte de 1 a 5.
// Em cada iteração, concatene a string resultadoString com o número atual e um hífen (ex: resultadoString += i + "-";).
// No final, imprima a string resultante (deve ser "1-2-3-4-5-").

let resultadoString = "";
for (let i = 1; i <= 5; i++) {
    resultadoString += i + "-";
    if (i === 5) {
        resultadoString = resultadoString.slice(0, -1); // Remove o último hífen
    }
    console.log(`Após adicionar ${i}, resultadoString é: ${resultadoString}`);
}
console.log(`\nString final: ${resultadoString}`);

// Agora usando um ternário;

let resultadoStringTernario = "";
for (let i = 1; i <= 5; i++) {
    resultadoStringTernario += i + (i < 5 ? "-" : ""); // Adiciona hífen apenas se não for o último número
    console.log(`Após adicionar ${i}, resultadoStringTernario é: ${resultadoStringTernario}`);
}
console.log(`\nString final com ternário: ${resultadoStringTernario}`);

let ordenado = 500;
let maxDespesa = 450;
let despesas = 0;

while (despesas <= ordenado) {
    let despesa = Number(prompt("Insira o valor da despesa:"));
    despesas += despesa;
    console.log(`Despesa adicionada: ${despesa}. Total de despesas: ${despesas}`);
}

while (ordenado >= despesas) {
    let despesa = Number(prompt("Insira o valor da despesa:"));
    despesas += despesa;
    console.log(`Despesa adicionada: ${despesa}. Total de despesas: ${despesas}`);
    ordenado -= despesa;
    console.log(`Orçamento restante: ${ordenado}`);
}
