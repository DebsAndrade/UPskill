// Desafio 3: Média de Notas
// Calcula a média de 3 ou mais notas e diz se o aluno foi aprovado (média ≥ 9.5).
let nota1 = 14;
let nota2 = 18;
let nota3 = 9;
let nota4 = 12;
let nomeAluno = "Aurora";

let somaNotas = nota1 + nota2 + nota3 + nota4;
let mediaNotas = somaNotas / 4;

console.log(`A média de ${nomeAluno} é ${mediaNotas}.`);

const aprovado = mediaNotas >= 9.5;
console.log(`A ${nomeAluno} foi aprovada: ${aprovado}`);
// Desafio 4: Concatenação e Literais
// Dado um nome, idade e cidade guarde numa variável a concatenação numa frase da junção destas 3 variáveis. Use a concatenação tradicional (+) e a template literal ($(variavel))
let nome = "Débora";
let idade = 30;
let cidade = "Lisboa";

let fraseConcatenacao = "A " + nome + " tem " + idade + " anos e vive em " + cidade + ".";
console.log(fraseConcatenacao);

let fraseTemplateLiteral = `A ${nome} tem ${idade} anos e vive em ${cidade}.`;
console.log(fraseTemplateLiteral);

// Desafio 5: Conversor de Moeda
// Dado uma taxa de câmbio fixa e um valor a converter calcule o valor convertido e mostre na consola
const taxaCambio = 6.15; // 1 Euro = 6.15 Reais
let valorEmEuros = 100; // Valor a converter

let valorConvertido = valorEmEuros * taxaCambio;
console.log(`${valorEmEuros} Euros equivalem a ${valorConvertido} Reais.`);

// Desafio 6: Incremento e Decremento
// * Dado uum valor inicial do contador mostre na consola o valor inicial, o valor pós incremento e o valor pré incremento. Use os operadores para incremento (++)
let contador = 20;
console.log("Valor inicial do contador:", contador);

contador++;
console.log("Valor após pós-incremento (contador++):", contador);

++contador;
console.log("Valor após pré-incremento (++contador):", contador);
