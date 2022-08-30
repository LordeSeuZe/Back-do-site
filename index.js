//versão Básica
//pacote "http" -> requisição e resposta do usuário
const http = require("http");

//crindo um servidor
const server = http.createServer((requisicao, resposta) =>{
    resposta.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    
    resposta.write("Hello World!!!");
    resposta.write("<p>Este é um parágrafo HTML</p>");
    resposta.write(`
        <ul>
        <li>opção A</li>
        <li>opção B</li>
        <li>opção C</li>
        </ul>
    `);
    resposta.write(`
        <ol>
        <li>opção A</li>
        <li>opção B</li>
        <li>opção C</li>
        </ol>
    `);

    resposta.end();

});

server.listen(3000, console.log("servidor rodando..."))

// //função normal em JS
// function nome(parametroA, paremetroB) {
//     return null
// }

// //função anônima arrow funtion