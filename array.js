// como criar um array
// a sintaxe para criar um array em JavaScript pode ser feita de duas formas: usando colchetes [] ou usando o construtor Array(). Dentro do array, os elementos são separados por vírgulas, e podem ser de qualquer tipo, como números, strings, objetos, etc. Dentro dos [] são chamados elementos do array.

const frutas = ["Maçã", "Banana", "Laranja", "Uva"]; // forma literal
console.log(frutas);

const numeros = new Array(10, 20, 30, 40); // forma com construtor
console.log(numeros);

const vazio = []; // array vazio
console.log(vazio);

// Várias formas de percorrer um array em JavaScript

// 1. Usando um loop for tradicional
for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta na posição ${i}: ${frutas[i]}`);
}

// 2. Usando o loop for...of
for (const fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}

// 3. Usando o loop for...in (não recomendado para arrays, mas possível)
for (const index in frutas) {
    console.log(`Fruta na posição ${index}: ${frutas[index]}`);
}

// 4. Usando o método forEach, mas o for...of é mais moderno e recomendado, o forEAch é mais antigo e pode causar problemas de performance em arrays grandes.
console.log("Usando forEach:");
frutas.forEach((fruta, index) => {
    console.log(`Fruta na posição ${index}: ${fruta}`);
});

// 5. Usando o método map (retorna um novo array)
console.log("Usando map para criar um novo array com frutas em maiúsculas:");
const frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasMaiusculas);

// 6. Usando o length para obter o tamanho do array
console.log(`O array frutas tem ${frutas.length} elementos.`);
// com números usando o for
for (let i = 0; i < numeros.length; i++) {
    console.log(`Número na posição ${i}: ${numeros[i]}`);
}

// Métodos importantes de array em JavaScript

// Adicionar elementos
console.log("Adicionando a fruta Manga:");
frutas.push("Manga"); // adiciona no final
console.log(frutas);

// Remover elementos
console.log("Removendo a última fruta:");
const ultimaFruta = frutas.pop(); // remove do final
console.log(`Removida: ${ultimaFruta}`);
console.log(frutas);

// Remover o primeiro elemento
console.log("Removendo a primeira fruta:");
const primeiraFruta = frutas.shift(); // remove do início
console.log(`Removida: ${primeiraFruta}`);
console.log(frutas);

// Adicionar no início
console.log("Adicionando Abacaxi no início:");
frutas.unshift("Abacaxi"); // adiciona no início
console.log(frutas);

// Verificar se um elemento existe
console.log("Verificando se a fruta Banana existe:");
const temBanana = frutas.includes("Banana");
console.log(`Tem banana? ${temBanana}`);

// Encontrar o índice de um elemento
console.log("Encontrando o índice da Laranja:");
const indiceLaranja = frutas.indexOf("Laranja");
console.log(`Índice da Laranja: ${indiceLaranja}`);

// Remover um elemento específico (usando splice)
console.log("Removendo a Laranja do array:");
if (indiceLaranja !== -1) {
    frutas.splice(indiceLaranja, 1); // remove 1 elemento na posição do índice da laranja
}
console.log(frutas);

// Concatenar arrays
console.log("Concatenando mais frutas ao array:");
const maisFrutas = ["Pera", "Kiwi"];
const todasFrutas = frutas.concat(maisFrutas);
console.log(todasFrutas);

