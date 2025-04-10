//modo commonjs de importação
//const express = require("express");
//modeo es6 de importação
import express from "express";
//carregando o metodo express para geremciamento de rotas
const router = express.Router();

//rota produtos
router.get("/produtos", (req, res) => {
  //array com lista de produtos
  const produtos = [
    { nome: "Celular motorola E22", preco: 1200, categoria: "eletroportáteis" },
    { nome: "tablet samsung", preco: 900, categoria: "eletrônicos" },
    { nome: "notebook lenovo", preco: 3200, categoria: "computadores" },
    { nome: "fone bluetooth", preco: 150, categoria: "periféricos" },
  ];

  res.render("produtos", {
    // enviando variaveis para paginas
    produto: produtos,
  });
});
// exportando o modulo
export default router;