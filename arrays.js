// Aula 14: Exercício de Entrega – Arrays
// autor: Débora Andrade

// Exercício 1 — Somar todos os valores do array

const numeros = [2, 5, 3, 8];

function somarArray(numeros) {
    let soma = 0;
    for (const numero of numeros) {
        soma += numero;
    }
    return soma;
}

console.log(`\nExercício 1 — Soma do array: ${somarArray(numeros)}`);


// Exercício 2 — Contar números pares

const numeros2 = [1, 4, 6, 9, 12];

function contarPares(numeros) {
    let contador = 0;
    for (const numero of numeros) {
        if (numero % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

console.log(`\nExercício 2 — Números pares no array: ${contarPares(numeros2)}`);


// Exercício 3 — Encontrar o maior número

const numeros3 = [10, 5, 22, 1, 7];

function encontrarMaior(numeros) {
    let maior = numeros[0];
    for (const numero of numeros) {
        if (numero > maior) {
            maior = numero;
        }
    }
    return maior;
}

console.log(`\nExercício 3 — Maior número no array: ${encontrarMaior(numeros3)}`);


// Exercício 4 — Criar um novo array com elementos Maiores que 10, usando for

const numeros4 = [5, 12, 3, 18, 7, 30];

function filtrarMaioresQueDez(numeros) {
    const maioresQueDez = [];
    for (const numero of numeros) {
        if (numero > 10) {
            maioresQueDez.push(numero);
        }
    }
    return maioresQueDez;
}

console.log(`\nExercício 4 — Números maiores que 10: ${filtrarMaioresQueDez(numeros4)}`);
