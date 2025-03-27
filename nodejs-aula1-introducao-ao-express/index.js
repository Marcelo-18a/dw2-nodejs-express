// importando o pacote express.js
const express = require("express");

// carregando o metodo principal do express
const app = express(); // iniciando o express

//configurar a view engine - ejs
app.set('view engine', 'ejs')

//criando a rota principal (raiz) do site
// metodo .get cria uma rota na aplicação
// req -> trata a requisão
// res -> trata a resposta

app.get("/", (req, res) =>{
  res.send(
    "<h1>Bem-vindo ao meu primeiro site em node.js! </h1><br><p>Iniciando estudos com node.js</p>"
  );
});

//rota de perfil

// :nome -> parametro obrigatorio
// :nome? -> parametro opcional
app.get("/perfil/:nome?", (req, res) =>{

  //coletando o parametro da rota e gravação na variavel
  const nome = req.params.nome;
  if(nome){
    res.send (`<h2>Olá  ${nome} seja bem-vindo ao seu perfil!</h2>`)
  }else{
    res.send (`<h1>Faça um login para acessar o seu perfil</h1>`)
  }

//   res.send("<h1>Perfil do usuario</h1>");
    res.send (`<h2>Olá  ${nome} seja bem-vindo ao seu perfil!</h2>`)
});

app.get("/produtos", (req,res) =>{
    res.render("produtos")
})

//inicando o sevidor da aplicação porta 8080
// o metodo listen do express inicia um servidor
app.listen(8080, (error) =>{
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servido iniciado com sucesso! ");
  }
});
