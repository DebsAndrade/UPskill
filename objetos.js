// Aula 12: Exercício de Entrega – Objetos
// autor: Débora Andrade

// Exercício 1 — Contador Simples
// Crie um objeto contador com as propriedades:
// valor → começa em 0
// incremento → valor a somar em cada passo
// Crie um método contar(vezes) que usa um ciclo for para aumentar o valor e depois mostre no console:
// 👉 "Valor final: X"
// 💡 Dicas:
// this.valor   // para aceder e modificar o valor  
// for (let i = 0; i < vezes; i++) { ... }  
// console.log("Valor final:", this.valor);

console.log("Exercício 1 — Contador Simples");

const contador = {
    valor: 0,
    incremento: 3,
    contar: function (vezes) {
        for (let i = 0; i < vezes; i++) {
            this.valor += this.incremento;
        }
        console.log(`Valor final: ${this.valor}`);
    }
};

contador.contar(5); // Testando o método contar com 5 incrementos

// Crie um objeto termometro com:
// temperatura → valor inicial
// alterar(valor) → altera a temperatura
// simular(vezes) → usa um ciclo for para aumentar ou diminuir 1 grau aleatoriamente em cada iteração
// Mostre no console:
// 👉 "Temperatura final: X°C"
// 💡 Dicas:
// Math.random()             // número entre 0 e 1
// if (Math.random() < 0.5)  // diminui temperatura
// else                      // aumenta temperatura

console.log("\nExercício 2 — Simulação de Temperatura");

const termometro = {
    temperatura: 20, // valor inicial em °C
    alterar: function (valor) {
        this.temperatura = valor;
        console.log(`Temperatura alterada para: ${this.temperatura}°C`);
    },
    simular: function (vezes) {
        for (let i = 0; i < vezes; i++) {
            if (Math.random() < 0.5) {
                this.temperatura -= 1; // diminui temperatura
            } else {
                this.temperatura += 1; // aumenta temperatura
            }
        }
        console.log(`Temperatura final: ${this.temperatura}°C`);
    }
};

termometro.alterar(25); // Testando o método alterar
termometro.simular(10); // Testando o método simular com 10 iterações

// Crie um objeto investimento com:
// capitalInicial
// taxaJuros (ex: 0.02 para 2%)
// Crie um método simular(anos) que usa um ciclo for para aplicar juros compostos:
// 📌 Fórmula:
// capital = capital * (1 + taxaJuros)
// Mostre no console o resultado usando toFixed(2) para mostrar apenas duas casas decimais.
// 💡 Dicas:
// let capital = this.capitalInicial;
// for (let i = 0; i < anos; i++) { ... }
// console.log("Capital após", anos, "anos:", capital.toFixed(2));

console.log("\nExercício 3 — Juros Compostos");

const investimento = {
    capitalInicial: 1000, // valor inicial
    taxaJuros: 0.05,      // 5% de juros
    simular: function (anos) {
        let capital = this.capitalInicial;
        for (let i = 0; i < anos; i++) {
            capital = capital * (1 + this.taxaJuros);
        }
        console.log(`Capital após ${anos} anos: R$${capital.toFixed(2)}`);
    }
};

investimento.simular(10); // Testando o método simular com 10 anos
investimento.simular(5);  // Testando o método simular com 5 anos
