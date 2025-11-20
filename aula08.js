// console.log("--- Exemplo while ---");
// let contador = 0;

// while (contador < 5) {
//   console.log(`Contador é: ${contador}`);
//   contador++;
// }

// let senhaCorreta = "debora123";
// let tentativa = "";
// let tentativasRestantes = 3;

// while (tentativa !== senhaCorreta && tentativasRestantes > 0) {
//   //tentativa = prompt("Digite a senha:");
//   // Na vida real, usaria um input aqui. Aqui, simulamos:
//   console.log(`Tentativa ${4 - tentativasRestantes} de 3...`);

//   if (tentativasRestantes === 1) {
//     tentativa = senhaCorreta; // Simula a última tentativa certa
//   }
//   tentativasRestantes--;
// }

// if (tentativa === senhaCorreta) {
//   console.log("Acesso concedido.");
// } else {
//   console.log("Acesso negado. Número de tentativas excedido.");
// }

// // Tarefa: Defina let sessoes = 1; e const maxSessoes = 8;.
// // Use um ciclo while para imprimir o número da sessão atual, incrementando até atingir 8.

// let sessoes = 1;
// const maxSessoes = 8;

// while (sessoes <= maxSessoes) {
//   console.log(`Sessão número: ${sessoes}`);
//   sessoes++;
// }

// let num = 100;

// while (num >= 50) {
//   console.log(`Número é: ${num}`);
//   num -= 7;
// }

// const pinCorreto = "123";
// let tentivas = 3;

// // Tarefa: Defina let x = 15;.
// // Use um ciclo while para encontrar o primeiro número inteiro, começando em x, que é divisível por 5 e 3 ao mesmo tempo.
// // Use o operador continue ou lógica de break para otimizar (mas o while simples funciona).

// // let x = Number(prompt("Digite um número inicial:"));

// // while (true) {
// //   console.log(x);
// //   if (x % 3 === 0 && x % 5 === 0) {
// //     console.log(x);
// //     console.log(`O primeiro número divisível por 3 e 5 é: ${x}`);
// //     break;
// //   }
// //   x++;
// // }

// let x = Number(prompt("Digite um número inicial:"));

// while (x % 3 !== 0 || x % 5 !== 0) {
//   console.log(x);
//   x++;
// }

// console.log(`O primeiro número divisível por 3 e 5 é: ${x}`);

// Defina let saldo = 0; e const limite = 50;.
// Defina um const valorDeposito = 10;.
// Crie um ciclo while que continue a adicionar o valorDeposito ao saldo enquanto o saldo for inferior ao limite.
// Dentro do ciclo, imprima o saldo atual.
// No final, imprima "Limite atingido ou ultrapassado!".

let saldo = 0;
const limite = 50;
const valorDeposito = 60;

while (saldo + valorDeposito < limite) {
  console.log(`saldo antes do depósito: ${saldo}`);
  saldo += valorDeposito; // saldo = saldo + valorDeposito
  if (valorDeposito > limite) {
    console.log("Deposito maior que o limite, deposite outro valor.");
  }
}

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

// Defina let saldo = 0; e const limite = 50;.
// Defina um const valorDeposito = 10;.
// Crie um ciclo while que continue a adicionar o valorDeposito ao saldo enquanto o saldo for inferior ao limite.
// Dentro do ciclo, imprima o saldo atual.
// No final, imprima "Limite atingido ou ultrapassado!".
// usando do...while

let saldo2 = 0;
const limite2 = 50;
const valorDeposito2 = 10;

do {
  console.log(`\nSaldo antes do depósito: ${saldo2}`);
  saldo2 += valorDeposito2; // saldo2 = saldo2 + valorDeposito2
  console.log(`Depósito concluído com sucesso. Saldo final: ${saldo2}`);
} while (saldo2 < limite2);

console.log("Limite atingido ou ultrapassado!");

// Tarefa: Defina let numero = 54321;.
// Use um ciclo while que corra enquanto numero > 0.
// Dentro do ciclo, use let digito = numero % 10; e numero = Math.floor(numero / 10); para separar os dígitos.
// Imprima cada digito em linhas separadas (o resultado será: 1, 2, 3, 4, 5).

let numero = 54321;

while (numero > 0) {
  let digito = numero % 10;
  console.log(digito);
  numero = Math.floor(numero / 10);
}

// Tarefa: Use ciclos aninhados para criar o seguinte padrão de estrelas.
// O ciclo externo controla as linhas (4 linhas).
// O ciclo interno controla o número de estrelas por linha.
// Dica: O ciclo interno deve depender do valor do contador do ciclo externo (ex: j <= i).
// Usando o while.

let linha = 1;
const totalLinhas = 4;

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
