//pacote "http" -> requisição e resposta do usuário
const http = require("http");

//crindo um servidor
const server = http.createServer((requisicao, resposta) =>{
    //configurando a resposta como se fosse uma página html
    resposta.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    
    // obter a url (endereço)
    const url = requisicao.url; 

    if (url == "/") {//http://localhost:3000/
        resposta.write("<h1>Minha Página</h1>");   
    }else if(url == "/cadastro"){//http://localhost:3000/cadastro
        resposta.write("<h1>Cadastro</h1>");
    }else if (url == "/sobre") {//http://localhost:3000/sobre
        resposta.write("<h1>Sobre</h1>");
    }else if (url == "/usuarios") {//http://localhost:3000/usuarios
        resposta.write("<h1>Usuários da Página</h1>");
    }  
    
    //finaliza resposta
    resposta.end();
});

server.listen(3000, console.log("servidor rodando..."))
