import express from "express";
import MoviesController from "./controllers/MoviesController.js";
import connection from "./config/sequelize-config.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use("/", MoviesController);

connection
.authenticate()
  .then(() => {
    console.log("conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

connection
  .query(`CREATE DATABASE IF NOT EXISTS movies;`)
  .then(() => {
    console.log("Banco de dados está criado!");
  })
  .catch((error) => {
    console.log(error);
  });

const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado em http://localhost:${port}`);
  }
});
