for (let i = 0 ; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

let linha = 1;
const totalLinhas = 5;

while (linha <= totalLinhas) {
  let estrelas = "";
  let contadorEstrelas = 1;

  while (contadorEstrelas <= linha) {
    estrelas += "*";
    contadorEstrelas++;
  }

  console.log(estrelas);
  linha++;
}

// Agora usando for

console.log("\nUsando for:");

for (let i = 1; i <= 5; i++) {
    let estrelas = "";
    for (let j = 1; j <= i; j++) {
        estrelas += "*";
    }
    setTimeout(() => console.log(estrelas), i * 50);
}

// Usa ciclos for para imprimir a tabuada de um número à tua escolha.

const numero = 20;

console.log(`\nTabuada do ${numero}:`);

for (let i = 1; i <= 20; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

function imprimirTabuada(numero) {
    console.log(`\nTabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        setTimeout(() => console.log(`${numero} x ${i} = ${resultado}`), i * 500);
    }
}

imprimirTabuada(5);
imprimirTabuada(8);

function tabuada(numero, limite) {
    console.log(`\nTabuada do ${numero} até ${limite}:`);
    for (let i = 1; i <= limite; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

tabuada(7, 15);

tabuada(12, 10);

const numero2 = 9;

function tabuadaLimite(limite) {
    console.log(`\nTabuada com limite até ${limite}:`);
    for (let i = 1; i <= limite; i++) {
        const resultado = numero2 * i;
        console.log(`${numero2} x ${i} = ${resultado}`);
    }
}

tabuadaLimite(12);

function tabelaMultiplicacao(limite) {
    console.log("\nTabela de Multiplicação Completa:");
    for (let i = 1; i <= limite; i++) {
        console.log(`\nTabuada do ${i}:`);
        for (let j = 1; j <= limite; j++) {
            const resultado = i * j;
            console.log(`${i} x ${j} = ${resultado}`);
        }
    }
}

tabelaMultiplicacao(100);


function processarNumero(num, funcao) {
    funcao(num);
}

processarNumero(5, tabelaMultiplicacao);

