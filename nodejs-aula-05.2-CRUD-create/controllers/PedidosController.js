import express from "express";
const router = express.Router();
import Pedidos from "../models/Pedido.js";

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
 
  Pedidos.findAll()
    .then((pedido) => {
      res.render("pedidos", {
        pedido: pedido,
      });
    })
});

export default router;
