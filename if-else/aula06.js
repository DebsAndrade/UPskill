// Verificar se a idade permite acesso:
const idadeMinima = 16;
let idadeUsuario = 19;

if (idadeUsuario >= idadeMinima) {
    console.log("Acesso concedido: É maior que a idade mínima.");
} else {
    console.log("Acesso negado: Idade insuficiente.");
}

// Tentando usar ternário para a mesma verificação acima:
let mensagemAcesso = (idadeUsuario >= idadeMinima) ? "Acesso concedido." : (idadeUsuario >= 14 && idadeUsuario < 16) ? "Acesso com acompanhante" : "Acesso negado";
console.log(mensagemAcesso);


// Usar o operador lógico AND para testar dois critérios:
const temBilhete = true;
const horaCerta = true;

// Acesso permitido se TIVER bilhete E for a HORA CERTA
if (temBilhete && horaCerta) {
    console.log("Entrada autorizada.");
} else {
    console.log("Entrada pendente. Verifique o bilhete ou a hora.");
}

// Usando ternário para a mesma lógica acima:
let statusEntrada = (temBilhete && horaCerta) ? "Entrada autorizada." :  "Entrada pendente. Verifique o bilhete ou a hora.";
console.log(statusEntrada);

// Demonstrar o uso e a importância da ordem das condições:

let notaExame = 8;

console.log("A sua nota é:", notaExame);

if (notaExame > 17) {
    console.log("Classificação: Distinção.");
} else if (notaExame > 13) {
    console.log("Classificação: Bom.");
} else if (notaExame >= 9.5) {
    console.log("Classificação: Suficiente.");
} else {
    console.log("Classificação: Reprovado.");
}


// Simular a escolha de um menu de opções:
const opcao = "Ver Saldo";

switch (opcao) {
    case "Levantar":
        console.log("A processar levantamento...");
        break;
    case "Ver Saldo":
        console.log("O seu saldo é de 500 EUR.");
        break;
    case "Transferir":
        console.log("Aceder menu de transferência.");
        break;
    default:
        console.log("Opção inválida.");
}

// Introduzir ternário como atalho rápido para if/else simples:
let idade = 10;
let estado = (idade >= 18) ? (idade <= 65 ? "Adulto" : "Idoso") : "Menor";
console.log("Estado atual:", estado);

// Classificação de Desempenho (if/else if)

let notaFinal = 9.5;

if (notaFinal >= 17) {
    console.log("Nível 1: Excelente");
} else if (notaFinal >= 14) {
    console.log("Nível 2: Muito Bom");
} else if (notaFinal >= 9.5) {
    console.log("Nível 3: Suficiente");
} else {
    console.log("Nível 4: Reprovado");
}

// Tentando usar ternário para a mesma lógica acima:
let classificacao = (notaFinal >= 17) ? "Nível 1: Excelente" : (notaFinal >= 14) ? "Nível 2: Muito Bom" : (notaFinal >= 9.5) ? "Nível 3: Suficiente" : "Nível 4: Reprovado";
console.log(classificacao);

// Despacho de Encomendas (switch)
const codigoEstado = "FR";

switch (codigoEstado) {
    case "PT":
        console.log("Despacho Nacional. Entrega 1 dia.");
        break;
    case "ES":
        console.log("Despacho Ibérico. Entrega 2 dias.");
        break;
    case "FR":
        console.log("Despacho Europeu. Entrega 3-5 dias.");
        break;
    default:
        console.log("Código de destino inválido.");
}

// Verificação de Acesso a Evento (if/else)
const idadeParticipante = 8;

if (idadeParticipante >= 18) {
    console.log("Acesso permitido.");
} else if (idadeParticipante >= 16 && idadeParticipante < 18) {
    console.log("Acesso com acompanhante.");
} else {
    console.log("Acesso proibido.");
}

// Tentando usar ternário para a mesma verificação acima:
let acessoEvento = (idadeParticipante >= 18) ? "Acesso permitido." : (idadeParticipante >= 16 && idadeParticipante < 18) ? "Acesso com acompanhante." : "Acesso proibido.";
console.log(acessoEvento);

// Menu de Restaurante (switch)
const pratoEscolhido = "Risotto";

switch (pratoEscolhido) {
    case "Pizza":
        console.log("Preparando Pizza...");
        break;
    case "Risotto":
        console.log("Preparando Risotto...");
        break;
    case "Hamburguer":
        console.log("Preparando Hamburguer...");
        break;
    default:
        console.log("Prato indisponível.");
}

// Avaliação de Consumo de Combustível (if/else if)
const litrosConsumidos = 6;

if (litrosConsumidos < 5) {
    console.log("Consumo muito eficiente.");
} else if (litrosConsumidos >= 5 && litrosConsumidos <= 8) {
    console.log("Consumo eficiente.");
} else if (litrosConsumidos > 8 && litrosConsumidos <= 12) {
    console.log("Consumo médio.");
} else {
    console.log("Consumo elevado.");
}

// Verificação de Paridade (Módulo)

let numero = 101;

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

let opcao02 = Number(prompt("Escolha uma opção: 1 - Iniciar, 2 - Parar, 3 - Pausar"));

switch (opcao02) {
    case 1:
        console.log("Iniciando...");
        break;
    case 2:
        console.log("Parando...");
        break;
    case 3:
        console.log("Pausando...");
        break;
    default:
        console.log("Opção inválida.");
}    
