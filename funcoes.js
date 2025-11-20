// Aula 10: Exercício de Entrega – Função
// autor: Débora Andrade

// I. Função com Condicional
// Crie uma função verificarParOuImpar(n) que mostre no console se o número é par ou ímpar
// Teste com diferentes números positivos e negativos

console.log("Tarefa I");

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`O ${numero} é um número par.`);
    } else {
        console.log(`O ${numero} é um número ímpar.`);
    }
}

verificarParOuImpar(10);
verificarParOuImpar(-3);
verificarParOuImpar(0);
verificarParOuImpar(7);

// II. Cálculo do IMC

// Crie uma função calcularIMC(peso, altura) que devolva o IMC usando: IMC = peso / (altura * altura)
// Mostre no console: "O IMC de X kg e Y m é Z"
// Experimente com diferentes pesos e alturas

console.log("\nTarefa II");

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    console.log(`O IMC de ${peso}kg e ${altura}m é ${imc.toFixed(2)}Kcal.`);
    return imc;
}

calcularIMC(70, 1.75);
calcularIMC(85, 1.8);
calcularIMC(60, 1.6);

// III. Somatório de 1 até n

// Crie uma função somatorio(n) que calcule a soma de todos os números de 1 até n usando um ciclo for
// Teste com n = 5 (resultado 15), n = 10 (resultado 55)

console.log("\nTarefa III");

function somatorio(num) {
    let soma = 0;
    for (let i = 1; i <= num; i++) {
        soma += i;
    }
    console.log(`O somatório de 1 até ${num} é ${soma}.`);
    return soma;
}

somatorio(5);
somatorio(10);
