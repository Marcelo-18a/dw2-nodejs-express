import express from "express";
const router = express.Router();
//importando o model de cliente
import Cliente from "../models/Cliente.js";

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

export default router;
