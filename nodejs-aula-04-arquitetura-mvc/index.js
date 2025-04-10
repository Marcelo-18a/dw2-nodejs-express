// importando o pacote express.js
import express from "express";

// carregando o metodo principal do express
const app = express(); // iniciando o express
// importando os controllers (onde estão as rotas)
import ProdutosControllers from "./controllers/ProdutosController.js"

//configurar a view engine - ejs
app.set("view engine", "ejs");

//configurando a pasta public para arquivos estaticos
app.use(express.static('public'))
// configurando o express para utilizar as rotas dos controllers

app.use("/", ProdutosControllers)


//criando a rota principal (raiz) do site
// metodo .get cria uma rota na aplicação
// req -> trata a requisão
// res -> trata a resposta

app.get("/", (req, res) => {
  res.render("index");
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
