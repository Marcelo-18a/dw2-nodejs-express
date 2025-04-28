import express from "express";
const router = express.Router();
//importando o model de cliente
import Cliente from "../models/Cliente.js";
import { HostNotFoundError } from "sequelize";
import { name } from "ejs";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  //fazendo select na tabela de clientes
  //findAll() -> retorna uma promisse
  Cliente.findAll()
    .then((clientes) => {
      res.render("clientes", {
        clientes: clientes,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//Rota de cadastro do cliente
router.post("/clientes/new", function (req, res) {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  // enviando dados para o banco
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      console.log(`realizado cadastro: ${nome} ${cpf} ${endereco}`);
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

//rota de exclusão de clientes
router.get("/clientes/delete/:id", (req, res) => {
  //coletando o parametro de id da rota
  const id = req.params.id;
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      console.log(`Cliente com a ID: ${id} excluido com sucesso!`);
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});
export default router;
