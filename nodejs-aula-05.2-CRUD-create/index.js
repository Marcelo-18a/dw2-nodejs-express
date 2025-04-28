// Importando dependências
import express from "express";
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";
import connection from "./config/sequelize-config.js";

// Inicializando o app Express
const app = express();

// Tentativa de autenticação com o banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("✅ Conexão com o banco realizada com sucesso!");
  })
  .catch((error) => {
    console.error("❌ Erro ao conectar com o banco:", error);
  });

// Criando o banco de dados (caso não exista)
connection
  .query(`CREATE DATABASE IF NOT EXISTS sistemaLoja`)
  .then(() => {
    console.log("✅ Banco de dados verificado e criado com sucesso.");
  })
  .catch((error) => {
    console.error("❌ Erro ao criar o banco de dados:", error);
  });

  //Configurando o express para aceitar dados vindo de um formulário

  app.use (express.urlencoded({extended: false}))

// Configurando o template engine
app.set("view engine", "ejs");

// Permitindo uso da pasta 'public' para arquivos estáticos (CSS, imagens, JS)
app.use(express.static("public"));

// Importando e utilizando os controllers (rotas)
app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);

// Rota principal
app.get("/", (req, res) => {
  res.render("index");
});

// Iniciando o servidor
const port = 8080;
app.listen(port, (err) => {
  if (err) {
    console.error("❌ Ocorreu um erro ao iniciar o servidor:", err);
  } else {
    console.log(`🚀 Servidor rodando em: http://localhost:${port}`);
  }
});
