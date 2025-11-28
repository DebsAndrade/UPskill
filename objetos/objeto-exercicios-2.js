console.log("-------- CONTA ----------");

class Conta {
    constructor(saldo = 0) {
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`\nDepósito de ${valor}€ realizado com sucesso.`);
    }
    levantar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`\nLevantamento de ${valor}€ realizado com sucesso.`);
        } else {
            console.log(`\nSaldo insuficiente para o levantamento de ${valor}€.`);
        }
    }
    aplicarJuros(taxa, anos) {
        for (let i = 0; i < anos; i++) {
            this.saldo += this.saldo * taxa;
        }
    }
    mostrarSaldo() {
        console.log(`\nSaldo atual: ${this.saldo.toFixed(2)}€.`);
    }
}

const conta = new Conta();
conta.mostrarSaldo();
conta.depositar(2000);
conta.mostrarSaldo();
conta.levantar(300);

console.log("\n-------- CLIENTE ----------");
class Cliente {
    constructor (nome, conta) {
        this.nome = nome;
        this.conta = conta;
    }
    transferir(valor, outraConta) {
        this.conta.levantar(valor);
        outraConta.depositar(valor);
        console.log(`\nTransferência de ${valor}€ realizada com sucesso para outra conta.`);
    }
    mostrarSaldo() {
        this.conta.mostrarSaldo();
    }
    aniversario() {
        this.conta.aplicarJuros(0.05, 1);
        console.log(`\nJuros aplicados na conta de ${this.nome}.`);
    }
    presentear(outroCliente, valor) {
        if (valor <= this.conta.saldo) {
            this.conta.saldo -= valor;
            outroCliente.conta.saldo += valor;
            console.log(`\nPresente de ${valor}€ enviado para ${outroCliente.nome}.`);
        } else {
            console.log(`\nSaldo insuficiente para enviar o presente de ${valor}€.`);
        }
    }
}

const cliente1 = new Cliente("Débora Andrade", conta);
const conta2 = new Conta(5000);
const cliente2 = new Cliente("Gabi Ayres", conta2);
const conta3 = new Conta(3000);
const cliente3 = new Cliente("Tais Dias", conta3);
const cliente4 = new Cliente("Lucas Ayres", new Conta(10000));

console.log("\nCliente 1:");
cliente1.mostrarSaldo();
cliente1.transferir(500, conta2);
cliente1.mostrarSaldo();
console.log("\nCliente 2:");
cliente2.mostrarSaldo();
cliente1.aniversario();
cliente1.mostrarSaldo();
cliente1.presentear(cliente2, 200);
cliente1.mostrarSaldo();
cliente2.mostrarSaldo();
console.log("\nCliente 3:");
cliente3.mostrarSaldo();
cliente2.presentear(cliente3, 1000);
cliente2.mostrarSaldo();
cliente3.mostrarSaldo();
console.log("\nCliente 4:");
cliente4.mostrarSaldo();
cliente2.presentear(cliente4, 1000);
cliente2.mostrarSaldo();
cliente4.mostrarSaldo();

console.log("\n-------- BANCO ----------");
class Banco {
    constructor () {
        this.clientes = [];
    }
    simularDia() {
        const taxaDiaria = 0.001; // 0,1% ao dia
        for (const clienteAtual of this.clientes) {
            let rendimentoDiario = clienteAtual.conta.saldo * taxaDiaria;
            console.log(`Cliente: ${clienteAtual.nome}, Rendimento diário: ${rendimentoDiario.toFixed(2)}€.`);
        }
    }
    relatorioClientes() {
        console.log("\nRelatório de Clientes do Banco:");
        for (const clienteAtual of this.clientes) {
            console.log(`Cliente: ${clienteAtual.nome}, Saldo Atual: ${clienteAtual.conta.saldo.toFixed(2)}€.`);
        }
    }
    aplicarTaxaDiaria(taxa) {
        for (const clienteAtual of this.clientes) {
            let rendimentoDiario = clienteAtual.conta.saldo * taxa;
            clienteAtual.conta.saldo += rendimentoDiario;
        }
    }
    resumoTotalBanco() {
        let total = 0;
        for (const clienteAtual of this.clientes) {
            total += clienteAtual.conta.saldo;
        }
        console.log(`\nResumo Total do Banco: ${total.toFixed(2)}€.`);
    }
}

const banco = new Banco();
banco.clientes.push(cliente1, cliente2, cliente3, cliente4);
console.log("\nSimulação de taxa diária no banco:");
banco.simularDia();
banco.relatorioClientes();
banco.aplicarTaxaDiaria(0.001); // Aplicar 0,1% de taxa diária
console.log("\nRelatório após aplicar taxa diária:");
banco.relatorioClientes();
banco.resumoTotalBanco();


console.log("\n-------- CAIXA ELETRÔNICO ----------");

class CaixaEletronico {
    constructor(banco) {
        this.banco = banco;
    }
    sacar(cliente, valor) {
        cliente.conta.levantar(valor);
    }
    depositar(cliente, valor) {
        cliente.conta.depositar(valor);
    }
    transferir(clienteOrigem, clienteDestino, valor) {
        clienteOrigem.conta.levantar(valor);
        clienteDestino.conta.depositar(valor);
    }
    mostrarSaldo(cliente) {
        cliente.conta.mostrarSaldo();
    }
}

const caixa = new CaixaEletronico(banco);
console.log("\nCliente 1 utilizando o caixa eletrônico:");
caixa.mostrarSaldo(cliente1);
caixa.depositar(cliente1, 1000);
caixa.mostrarSaldo(cliente1);
caixa.sacar(cliente1, 500);
caixa.mostrarSaldo(cliente1);
console.log("\nCliente 2 utilizando o caixa eletrônico:");
caixa.mostrarSaldo(cliente2);
caixa.transferir(cliente2, cliente3, 2000);
caixa.mostrarSaldo(cliente2);
caixa.mostrarSaldo(cliente3);
banco.relatorioClientes();

