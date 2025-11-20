// Aula 7: Exercício de Entrega – Contadores e Somatórios
// autor: Débora Andrade

// I. Definição de Variáveis e Constantes

let investimentoInicial = 1000; // Valor inicial investido em euros
const taxaJurosAnual = 0.05; // Taxa de juros anual de 5%
const anosInvestimento = 5; // Período do investimento em anos

// II. Processamento (Cálculo de Juros)

let saldoAtual = investimentoInicial;

console.log("--- Crescimento do Investimento ao Longo dos Anos ---");
for (let i = 1; i <= anosInvestimento; i++) {
    let juroGanho = saldoAtual * taxaJurosAnual;
    console.log(juroGanho); // Esse console é para apenas entender melhor o código, faço um debug.
    saldoAtual += juroGanho;
    console.log(`Fim do Ano ${i}: Saldo = ${saldoAtual.toFixed(2)} EUR`);
}

// III. Contagem Regressiva Personalizada

console.log("\n--- Contagem Regressiva de 100 a 0 ---");
for (let j = 100; j >= 0; j -= 10) {
    console.log(j);
}
