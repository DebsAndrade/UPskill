// Exercício Guiado: Objetos


// 01

console.log("Aqui está apresentação do objeto pessoa:");
const pessoa = {
    nome: "Débora",
    idade: 30,
    profissao: "Desenvolvedora",
    paisMoradia: "Portugal",
    saudacao: function () {
        console.log(`Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos e sou uma ${this.profissao}.`);
    },
}

console.log(pessoa);

pessoa.saudacao();

// 02
function mostrarInformacoes(parametroObjeto) {
    console.log("\nInformações da Pessoa:");
    for (let chave in parametroObjeto) {
        if (typeof parametroObjeto[chave] == 'function') { // Esse if vai ignorar a função no console.log e executar a função saudacao.
            parametroObjeto[chave]();
        }
        else {
            console.log(`${chave}: ${parametroObjeto[chave]}`);
        }
    }
}

mostrarInformacoes(pessoa);

// 03
const carro = {
    marca: "Pegeout",
    modelo: "3008",
    descrever: function () {
        console.log(`\nEste carro é um ${this.marca} modelo ${this.modelo}.`); // "This" referencia a prorpriedade do proprio objeto.
    }
}

carro.descrever();

// 04
function fazerAniversario(parametro) {
    parametro.idade += 1; // Incrementa a idade em mais 1 idade = idade + 1
    console.log(`\nFeliz Aniversário, ${parametro.nome}! Agora você tem ${parametro.idade} anos.`);
}

fazerAniversario(pessoa);

// 05

const retangulo = {
    largura: 5,
    altura: 10,
    calcularArea: function () {
        return this.largura * this.altura;
    }
};

console.log(`\nA área do retângulo é: ${retangulo.calcularArea()}.`);

// 06

function processar(obj, callback) {
    console.log("\nProcessando o objeto:");
    callback(obj);
}

function exibirPropriedades(obj) {
    for (let chave in obj) {
        if (typeof obj[chave] == 'function') {
            obj[chave]();
        }
        else {
            console.log(`${chave}: ${obj[chave]}`);
        }
    }
}

processar(pessoa, exibirPropriedades);

// 07

const aluno = {
    nome: "Carlos",
    nota1: 18,
    nota2: 16,
    nota3: 15,
    calcularMedia: function () {
        const soma = this.nota1 + this.nota2 + this.nota3;
        return soma / 3;
    }
}
console.log(`\nA média das notas de ${aluno.nome} é: ${aluno.calcularMedia().toFixed(2)}.`);

// 08

function criarPessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        falar: function () {
            console.log(`\nOlá, estou falando de dentro do objeto criado. Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
        }
    }
}

criarPessoa("Ana", 25).falar();
criarPessoa("Bruno", 28).falar();
criarPessoa("Gabi", 39).falar();

// 09

const agenda = {
    nome: "Débora",
    telefone: "12345-6789",
    listar: function (callback) {
        console.log(`\nNome: ${this.nome}, Telefone: ${this.telefone}`);
    }
}
agenda.listar();
function atualizarContato(obj, novoNome, novoTelefone) {
    obj.nome = novoNome;
    obj.telefone = novoTelefone;
    console.log("\nContato atualizado:");
}

atualizarContato(agenda, "Débora Andrade", "98765-4321");
agenda.listar();


// 10
//Crie uma função externa operacaoSegura(conta, valor, funcao) que executa a função apenas se o valor for positivo.

console.log("\nOperações bancárias:");

const contaBancaria = {
    titular: "Débora Andrade",
    saldo: 1000,
    depositar: function (valor) {
        this.saldo += valor;
        console.log(`\nDepósito de R$${valor} realizado. Novo saldo: R$${this.saldo}.`);
    },
    levantar: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`\nLevantamento de R$${valor} realizado. Novo saldo: R$${this.saldo}.`);
        } else {
            console.log(`\nSaldo insuficiente para levantamento de R$${valor}. Saldo atual: R$${this.saldo}.`);
        }
    },
    mostrarSaldo: function () {
        console.log(`\nSaldo atual: R$${this.saldo}.`);
    }
}

contaBancaria.mostrarSaldo();
contaBancaria.depositar(500);
contaBancaria.levantar(300);
contaBancaria.levantar(1500);
contaBancaria.mostrarSaldo();

function operacaoSegura(saldo, valor, funcao) {
    if (valor > 0) {
        funcao.call(saldo, valor); // Usando call para garantir que o "this" dentro da função aponte para o objeto conta.
    } else {
        console.log(`\nOperação inválida: o valor R$${valor} não é positivo.`);
    }
}

operacaoSegura(contaBancaria, 200, contaBancaria.depositar);
operacaoSegura(contaBancaria, 10, contaBancaria.levantar);
operacaoSegura(contaBancaria, 50, contaBancaria.levantar);
operacaoSegura(contaBancaria, -100, contaBancaria.levantar);

// 10 Comparador de Objetos

const pessoa01 = {
    nome: "Débora",
    idade: 30,
}

const pessoa02 = {
    nome: "Carlos",
    idade: 30,
}

function compararObjetos(obj1, obj2, callback) {
    return callback(obj1, obj2);
}

function maiorIdade(obj1, obj2) {
    if (obj1.idade > obj2.idade) {
        console.log(`\n${obj1.nome} é mais velho(a) que ${obj2.nome}.`);
    } else if (obj1.idade < obj2.idade) {
        console.log(`\n${obj2.nome} é mais velho(a) que ${obj1.nome}.`);
    } else {
        console.log(`\n${obj1.nome} e ${obj2.nome} têm a mesma idade.`);
    }
}

compararObjetos(pessoa01, pessoa02, maiorIdade);

// 12

console.log("\nSimulação de Votação");

const votacao = {
    candidato1: 0,
    candidato2: 0,
    votar: function (candidato) {
        this[candidato] += 1; // Incrementa o voto do candidato escolhido candidato = canditado + 1
    },
    mostrarResultado: function () {
        console.log(`\nResultado da Votação:\nCandidato 1: ${this.candidato1} votos\nCandidato 2: ${this.candidato2} votos`);
        if (this.candidato1 > this.candidato2) {
            console.log("Candidato 1 venceu!");
        } else if (this.candidato2 > this.candidato1) {
            console.log("Candidato 2 venceu!");
        } else {
            console.log("Houve um empate!");
        }
    },
    iniciarVotacao: function (totalVotos) {
        for (let i = 0; i < totalVotos; i++) {
            if (Math.random() < 0.5) {
                this.votar("candidato1");
            } else {
                this.votar("candidato2");
            }
        }
        this.mostrarResultado();
    }
};

votacao.iniciarVotacao(29); // Simulando votos aleatórios




