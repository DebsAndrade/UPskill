const conta = {
    saldo: 2000,
    depositar: function (valor) {
        this.saldo += valor;
        console.log(`\nDepósito de ${valor}€ realizado com sucesso.`);
    },
    levantar: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`\nLevantamento de ${valor}€ realizado com sucesso.`);
        } else {
            console.log(`\nSaldo insuficiente para o levantamento de ${valor}€.`);
        }
    },
    aplicarJuros: function (taxa, anos) {
        for (let i = 0; i < anos; i++) {
            this.saldo += this.saldo * taxa;
        }
    },
    mostrarSaldo: function () {
        console.log(`\nSaldo atual: ${this.saldo}€.`);
    },
};
conta.mostrarSaldo();
conta.depositar(500);
conta.mostrarSaldo();
conta.levantar(300);
conta.mostrarSaldo();
console.log("\nAplicando juros por 2 anos...");
conta.aplicarJuros(0.05, 2);
conta.mostrarSaldo();

const cliente = {
    nome: "Ana Silva",
    saldo: 1500,
    transferir: function (valor, outraConta) {
        if (valor <= conta.saldo) {
            conta.saldo -= valor;
            outraConta.saldo += valor;
            console.log(`\nTransferência de ${valor}€ realizada com sucesso.`);
        } else {
            console.log(`\nSaldo insuficiente para a transferência de ${valor}€.`);
        }
    },
    mostrarSaldo: function () {
        console.log(`\nSaldo atual: ${this.saldo}€.`);
    },
    aniversario: function () {
        console.log("\nFeliz aniversário! Você recebeu um bônus de 100€.");
        this.saldo += 100;
    },
    presentear: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`\nVocê presenteou alguém com ${valor}€.`);
        } else {
            console.log(`\nSaldo insuficiente para presentear ${valor}€.`);
        }
    }
};

cliente.mostrarSaldo();
cliente.aniversario();
cliente.mostrarSaldo();
cliente.presentear(200);
cliente.mostrarSaldo();


const banco = {

};

const gerente = {

};

const caixaEletronico = {

};

