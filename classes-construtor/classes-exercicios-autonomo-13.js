// Exercício 01

class Conta {
    constructor (cliente, saldo = 0) {
        this.cliente = cliente;
        this.saldo = saldo;
    }
    mostrarSaldo() {
        console.log(`O saldo da conta é R$${this.saldo.toFixed(2)}`);
    }
};
//Quero mostrar o saldo da conta
const conta = new Conta("Débora Andrade", 1500.5);
console.log(conta.mostrarSaldo());

class Cliente {
    constructor (nome, Conta) {
        this.nome = nome;
        this.conta = Conta;
    }
};

class Banco {
    constructor (nome, Cliente) {
        this.nome = nome;
        this.cliente = Cliente;
    }
};

class Gerente {
    constructor (nome, Banco) {
        this.nome = nome;
        this.banco = Banco;
    }
};

class CaixaEletronico {
    constructor (localizacao, Banco) {
        this.localizacao = localizacao;
        this.banco = Banco;
    }
};




// Exercício 02

class Aluno {
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    realizarProva(prova) {
        console.log(`${this.nome} está realizando a prova de ${prova}.`);
    } 
};

class Prova {
    constructor (Aluno, nota) {
        this.aluno = Aluno;
        this.nota = nota;
    }
};

class Professor {
    constructor (nome, disciplina) {
        this.nome = nome;
        this.disciplina = disciplina;
    }
};

class Disciplina {
    constructor (nome, Professor) {
        this.nome = nome;
        this.professor = Professor;
    }
};

class Secretaria {
    constructor (nome) {
        this.nome = nome;
    }
};
