// Aula 6: Exercício de Entrega – Sistema de Regras de Negócio
// autor: Débora Andrade

// I. Definição de Variáveis (Entrada de Dados)

const rendimentoMensal = 3000;
const idade = 25;
const temDividas = true;
const anosTrabalho = 2;
let mensagem;

// II. Processamento (Regras de Elegibilidade)

if (rendimentoMensal >= 3000 && idade >= 25) {
    mensagem = "Aprovado Nível 1: Você atende aos critérios de rendimento e idade. Crédito de Alto Risco (Valor Máximo: 50.000 EUR).";
} else if (idade >= 20 && rendimentoMensal >= 1500 && !temDividas) {
    mensagem = "Aprovado Nível 2: Você atende aos critérios de idade, rendimento e não possui dívidas. Crédito Padrão (Valor Máximo: 10.000 EUR).";
} else {
    mensagem = "Recusado: Não cumpre os critérios mínimos de elegibilidade.";
}

console.log(mensagem);
