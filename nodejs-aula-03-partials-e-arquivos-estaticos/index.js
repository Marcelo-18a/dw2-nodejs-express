// importando o pacote express.js
const express = require("express");

// carregando o metodo principal do express
const app = express(); // iniciando o express

//configurar a view engine - ejs
app.set("view engine", "ejs");

//configurando a pasta public para arquivos estaticos
app.use(express.static('public'))


//criando a rota principal (raiz) do site
// metodo .get cria uma rota na aplicação
// req -> trata a requisão
// res -> trata a resposta

app.get("/", (req, res) => {
  res.render("index");
});

//rota de perfil

// :nome -> parametro obrigatorio
// :nome? -> parametro opcional
app.get("/perfil/:perfil?", (req, res) => {
  const perfil = req.params.perfil;
  res.render("perfil", { perfil: perfil });
});

//rota produtos
app.get("/produtos/:produtos?", (req, res) => {
  const produto = req.params.produtos;

  //array com lista de produtos
  const produtos = ["computador", "celular", "tablet", "notebook"];

  res.render("produtos", {
    produto: produto,
    produtos: produtos
  });
});

//inicando o sevidor da aplicação porta 8080
// o metodo listen do express inicia um servidor
app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servido iniciado com sucesso! ");
  }
});
