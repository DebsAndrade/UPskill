function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const pessoa01 = new Pessoa("Débora", 30); // new cria um novo objeto do tipo Pessoa para o construtor que foi definido acima.
const pessoa02 = new Pessoa("Carlos", 25);
const pessoa03 = new Pessoa("Ana", 28);

console.log(`A primeira pessoa chama-se ${pessoa01.nome} e tem ${pessoa01.idade} anos.`);
console.log(`A segunda pessoa chama-se ${pessoa02.nome} e tem ${pessoa02.idade} anos.`);
console.log(`A terceira pessoa chama-se ${pessoa03.nome} e tem ${pessoa03.idade} anos.`);


class Carro { // A class é uma forma mais moderna de definir um construtor em JavaScript, e faz a mesma coisa que a função construtora acima.
    constructor(marca, modelo, ano) { // O método constructor é chamado automaticamente quando um novo objeto é criado a partir da classe. Constructor é um método especial para inicializar objetos.
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const carro1 = new Carro("Toyota", "Corolla", 2020);
const carro2 = new Carro("Honda", "Civic", 2019);
const carro3 = new Carro("Ford", "Focus", 2018);

console.log(`O primeiro carro é um ${carro1.marca} ${carro1.modelo} do ano ${carro1.ano}.`);
console.log(`O segundo carro é um ${carro2.marca} ${carro2.modelo} do ano ${carro2.ano}.`);
console.log(`O terceiro carro é um ${carro3.marca} ${carro3.modelo} do ano ${carro3.ano}.`);
