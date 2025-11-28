// 01

const frutas = ["Maçã", "Banana", "Laranja"];

console.log("Array inicial de frutas:", frutas);

// 02

console.log("\nPrimeira fruta:", frutas[0]);
console.log("\nÚltima fruta:", frutas[frutas.length - 1]);
console.log("\nTodas as frutas com seus índices:");
frutas.forEach((fruta, index) => {
    console.log(`Índice ${index}: ${fruta}`);
});

// 03

console.log("\nAdicionando a fruta Uva no final do array:");
frutas.push("Uva");
console.log(frutas);
console.log("\nAdicionando a fruta Kiwi no início do array:");
frutas.unshift("Kiwi");
console.log(frutas);
console.log("\nRemovendo a última fruta do array:");
const frutaRemovida = frutas.pop();
console.log(`Fruta removida: ${frutaRemovida}`);
console.log(frutas);
console.log("\nRemovendo a primeira fruta do array:");
const primeiraFrutaRemovida = frutas.shift();
console.log(`Fruta removida: ${primeiraFrutaRemovida}`);
console.log(frutas);

// 04

console.log("\nVerificando se a fruta Banana existe no array:");
const temBanana = frutas.includes("Banana");
console.log(`Existe Banana? ${temBanana}`);
console.log("\nEncontrando o índice da fruta Laranja:");
const indiceLaranja = frutas.indexOf("Laranja");
console.log(`Índice da Laranja: ${indiceLaranja}`);

// 05

console.log("\nFormatação do array de frutas:");
frutas.forEach((fruta) => {
    console.log(`Fruta: ${fruta}`);
});

// 06

const numeros = [1, 2, 3, 4, 5];
console.log("\nArray inicial de números:", numeros);

const quadrados = numeros.map(numero => numero * numero);
console.log("\nArray de quadrados dos números:", quadrados);

// 07

const maiorQueTres = numeros.filter(numero => numero > 3);
console.log("\nNúmeros maiores que 3:", maiorQueTres);

// 08

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("\nSoma dos números:", soma);
const multiplicar = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
console.log("\nMultiplicação dos números:", multiplicar);

// 09

function processarArray(array, funcao) {
    return array.map(funcao);
}

const numerosProcessados = processarArray(numeros, numero => numero * numero);

console.log("\nNúmeros processados (quadrados) usando a função processarArray:", numerosProcessados);


// 10

const compras = [
    {
        produto: "Arroz",
        preco: 2.5,
        quantidade: 2
    },
    {
        produto: "Leite",
        preco: 1.8,
        quantidade: 3
    },
    {
        produto: "Pão",
        preco: 0.25,
        quantidade: 10
    }
]
// imprimir apenas os produtos
console.log("\nLista de produtos nas compras:");
compras.forEach(item => {
    console.log(`- ${item.produto}`);
});

// calcular o valor total das compras
const valorTotal = compras.reduce((total, item) => total + (item.preco * item.quantidade), 0);
console.log(`\nValor total das compras: ${valorTotal.toFixed(2)}€`);

const filtrarPreco = compras.filter(item => item.preco > 2);
console.log("\nProdutos com preço maior que 2€:");
filtrarPreco.forEach(item => {
    console.log(`- ${item.produto} (${item.preco}€)`);
});

const nomesProdutos = compras.map(item => item.produto);
console.log("\nNomes dos produtos nas compras:", nomesProdutos);