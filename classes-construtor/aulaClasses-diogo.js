class Banco {
    nome = "Banco XPTO";
    #saldo = 0; // atributo privado (#)
};

try {
    // Tentar fazer algo perigoso
    throw new Error("Ligação falhou!");
} catch (erro) {
    // Apanhar o erro e mostrar a mensagem
    console.error(erro.message);
}


let formato = new Intl.NumberFormat('pt-PT', {
    style: 'currency', currency: 'EUR'
});
console.log(formato.format(1234.5));
// Saída: "1.234,50 €"

let formatoBR = new Intl.NumberFormat('pt-BR', {
style: 'currency', currency: 'BRL'
});
console.log(formatoBR.format(1234.5));
// Saída: "R$ 1.234,50"

let link = new URL("https://site.com?id=50&nome=debora");
// Ler parâmetros
console.log(link.searchParams.get("id")); // "50"
console.log(link.searchParams.get("nome"));
