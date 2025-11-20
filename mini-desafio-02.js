// Desafio 01

let nome = "utilizador";
let senhaCorreta = "1234";
let senhaInserida = "1234";
let loginValido = (nome === "utilizador") && (senhaInserida === senhaCorreta);
console.log("Login válido?", loginValido);

// Desafio 02

let nome01 = "Débora";
let idade = 30;

// Concatenação tradicional
let mensagem1 = "A " + nome01 + " tem " + idade + " anos.";
console.log(mensagem1);

// Concatenação com template literal
let mensagem2 = `A ${nome01} tem ${idade} anos.`;
console.log(mensagem2);

// Muda o nome e a idade e observa o resultado.
// Cria uma nova variável cidade e adiciona essa informação às duas mensagens.
// Exemplo esperado: "A Rita tem 22 anos e vive em Lisboa."
let nome02 = "Rita";
let idade02 = 22;
let mensagemNome = "A " + nome02 + " tem " + idade02 + " anos.";
let mensagemIdade = `A ${nome02} tem ${idade02} anos.`;
console.log(mensagemNome);
console.log(mensagemIdade);
let cidade = "Lisboa";
let mensagem3 = "A " + nome01 + " tem " + idade + " anos e vive em " + cidade + ".";
let mensagem4 = `A ${nome01} tem ${idade} anos e vive em ${cidade}.`;
console.log(mensagem3);
console.log(mensagem4);


//. Crie um novo ficheiro login.js. Substitui os espaços pelas expressões lógicas certas (&&, ||, !)
const userAtivo = true;
const senha = true;
const assinaturaPaga = false;

// 1. Acesso Simples: deve ser ativo E ter senha correta
const acessoSimples = userAtivo && senha;
console.log("Acesso Simples:", acessoSimples);

// 2. Acesso Premium: precisa de acesso simples E assinatura paga
const acessoPremium = acessoSimples && assinaturaPaga;
console.log("Acesso Premium:", acessoPremium);

// 3. Requer Atualização: ativo E assinatura NÃO paga
const requerAtualizacao = userAtivo && !assinaturaPaga;
console.log("Requer Atualização:", requerAtualizacao);
       
