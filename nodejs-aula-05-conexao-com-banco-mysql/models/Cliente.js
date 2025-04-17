import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

//criando o model (tabela de banco)
const Cliente = connection.define("clientes", {
  //colunas da tabela
  nome: {
    //tipo de dado
    type: Sequelize.STRING,
    //permite vazio?
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


Cliente.sync({foece: false})
export default Cliente;


