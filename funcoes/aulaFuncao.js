function saudacao() {
    console.log("Olá!");
}

saudacao();

function soma(a, b) {
    return a + b;
}

console.log(soma(5, 5));

function dobro(n) {
    return n * 2;
}

console.log(dobro(4));

function calculate(a, b, c) {
    let d = (a + b) * c;
    return d;
}

let x = calculate(4, 5, 9);
let y = calculate((x / 3), 3, 5);

let f = console.log(x);
console.log("f", f);

console.log(x);
console.log(y);

function somar2(a, b) {
    return a + b;
}

let resultadoSomar2 = somar2(10, 10);
console.log(`Aqui tens o resultado da soma: ${resultadoSomar2}`);

function subtrair(a, b) {
    return a - b;
}

let resultadoSubtrair = subtrair(10, 10);
console.log(`Aqui tens o resultado da subtração: ${resultadoSubtrair}`);

function multiplicar(a, b) {
    return a * b;
}

let resultadoMultiplicar = multiplicar(10, 10);
console.log(`Aqui tens o resultado da multiplicação: ${resultadoMultiplicar}`);

function dividir(a, b) {
    return a / b;
}

let resultadoDividir = dividir(10, 10);
console.log(`Aqui tens o resultado da divisão: ${resultadoDividir}`);

function calcular(a, b, multiplicar) {
    return multiplicar(a, b);
}

let resultadoCalcular = calcular(10, 10, multiplicar);
console.log(`Aqui tens o resultado da função calcular: ${resultadoCalcular}`);


let print = function saudar(nome) {
    console.log(`Olá, ${nome}!`);
}

print("Débora");

function printParamentro(z, saudar) {
    saudar(z);
}

printParamentro("Aurora", print);

function exemploCallback(op, a, b) {
    return op(a, b);
}

function soma3(x, y) {
    return x + y;
}

console.log(exemploCallback(soma3, 7, 3));

function contarAte(numero) {
    for (let i = 1; i <= numero; i++) {
        setTimeout(() => console.log(i), i * 1000);
    }
}
contarAte(5);


