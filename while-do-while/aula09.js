let user = "debora";
let password = "1234";
const mensagemAcesso = "Acesso concedido.";

do {
    user = String(prompt("Digite o nome de usuário:"));
    password = Number(prompt("Digite a senha:"));

    if (user !== "user" && password !== 1234) {
        alert("Usuário ou senha incorretos. Tente novamente.");
    } else {
        alert(mensagemAcesso);
    }
}
while (user !== "user" && password !== 1234);
alert("Bem-vindo ao sistema!");

