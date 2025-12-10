// Loops e Ifs

console.log("Exercícios 6");
// 6 Contagem: Criar um loop for que imprime os números de 5 a 15.
for (let i = 5; i <= 15; i++) {
    console.log(i);
}

console.log("\nExercícios 7");
// 7 Números Pares: Criar um loop for que imprime todos os números pares entre 0 e 20 e imprimir o total.
let somaTotal = 0;
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
    somaTotal += i;
}
console.log("Soma total dos números:", somaTotal);

console.log("\nExercícios com funções");
// Agora fazer uma função para juntar as duas funcionalidades acima
function contagemEpares() {
    console.log("Contagem de 5 a 15:");
    for (let i = 5; i <= 15; i++) {
        console.log(i);
    }
    console.log("Números pares entre 0 e 20:");
    for (let i = 0; i <= 20; i += 2) {
        console.log(i);
    }
}

contagemEpares();

console.log("\nExercícios 10");
// 10 FizzBuss Lite: Percorrer números de 1 a 10. Se o número for 3 ou 6, imprimir "Fizz", senão imprimir o número. Usar uma função.

function imprimeFizz(min, max, valor1, valor2) {
    for (let i = min; i <= max; i++) {
        if (i === valor1 || i === valor2) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

imprimeFizz(1, 10, 3, 6);

// 8 Tabuada
const numero = 8;

console.log(`\nTabuada do ${numero}:`);

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

function imprimirTabuada(numero) {
    console.log(`\nTabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

imprimirTabuada(7);

// 9

console.log("\nAvaliação de Notas:");
let nota = 18;

if (nota < 10) {
    console.log("Reprovado");
} else if (nota >= 10 && nota < 14) {
    console.log("Suficiente");
} else {
    console.log("Bom");
}

function avaliarNota(nota) {
    if (nota < 10) {
        console.log("Reprovado");
    } else if (nota >= 10 && nota < 14) {
        console.log("Suficiente");
    } else {
        console.log("Bom");
    }
}

avaliarNota(9);
avaliarNota(12);
avaliarNota(16);


// Arrays e Funções

// 11 
const frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas[1]);

// 12

frutas.push('kiwi');
console.log(frutas);
frutas.shift(1);
console.log(frutas);

// 13

const notas = [10, 14, 19, 15, 20, 5, 18, 7];

// for (let i = 0; i < notas.length; i++) {
//     if (notas[i] < 10) {
//         console.log(`Nota ${notas[i]}: Reprovado`);
//     }
// }

// usando for of
console.log("\nUsando for of:");
for (const nota of notas) {
    if (nota < 10) {
        console.log(`Nota ${nota}: Reprovado`);
    }
}

// 14

function calcularMedia(notas) {
    let soma = 0;
    for (const nota of notas) {
        soma += nota;
    }
    const media = soma / notas.length;
    return media;
}
const mediaNotas = calcularMedia(notas);
console.log(`\nMédia das notas: ${mediaNotas}`);

// 15

function temValor(lista, valor) {
    let resultado = false;
    for (const item of lista) {
        if (item === valor) {
            resultado = true;
        } else {
            resultado = false;
        }
    }
    return resultado;
}

console.log(`\nO valor 15 está na lista? ${temValor(notas, 15)}`);
console.log(`O valor 8 está na lista? ${temValor(notas, 8)}`);

// Objetos e Estruturas

// 16

const carro = {
    marca: "Pegueot",
    modelo: "3008",
    ano: 2018,
}

// 17

console.log(`\nO meu carro é um ${carro.marca} e o modelo é ${carro.modelo}.`);

// 18

carro.ano = 2024;
console.log(`Ano atualizado do carro: ${carro.ano}`);
carro.cor = "Preto";

// 19

console.log("\nPropriedades do carro:");
for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}

// 20

carro.buzinar = function() {
    console.log("\nBuzinando: BEEP BEEP!");
}

carro.buzinar();

console.log("\nPropriedades do carro:");
for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}

// 21
// spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log("\nArray combinado:", arr3);

// 22

const user = {
    nome: "Ana",
    idade: 28,
}
console.log("\nUsuário original:", user);

const updatedUser = {
    ...user,
    cpf: "123.456.789-00",
    email: "ana@example.com"
}

console.log("\nUsuário atualizado:", updatedUser);

// 23
// rest
function somarTudo(...numeros) {
    let soma = 0;
    for (const num of numeros) {
        soma += num;
    }
    return soma;
}

const resultadoSoma = somarTudo(1, 2, 3, 4, 5);
console.log(`\nSoma de todos os números: ${resultadoSoma}`);
const resultadoSoma2 = somarTudo(10, 20, 30);
console.log(`Soma de todos os números: ${resultadoSoma2}`);

// 24

// 25

// 26

const carrinho = [
    { nome: "Camisa", quantidade: 2, preco: 50 },
    { nome: "Calça", quantidade: 1, preco: 100 },
    { nome: "Tênis", quantidade: 1, preco: 150 },
];

// 27

let totalCarrinho = 0;
for (const item of carrinho) {
    totalCarrinho += item.quantidade * item.preco;
}
console.log(`\nTotal do carrinho: ${totalCarrinho}€`);

// 28 usando spread

function aplicarDesconto(produto, percentagem) {
    const desconto = produto.preco * (percentagem / 100);
    const novoPreco = produto.preco - desconto;
    return {
        ...produto,
        preco: novoPreco
    };
}

const produtoComDesconto = aplicarDesconto(carrinho[0], 10);
console.log("\nProduto com desconto:", produtoComDesconto);
console.log("Produto original:", carrinho[0]);

// 29

function relatorio(...obj) {
    const total = obj.reduce((acc, n) => acc + n.preco, 0);
    return `Tens ${carrinho.length} produtos e o total dos produtos é: ${total}€.`;
}

console.log("\n" + relatorio(...carrinho));