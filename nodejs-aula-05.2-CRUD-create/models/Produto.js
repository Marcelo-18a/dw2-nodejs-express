import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Produto = connection.define("Produto", {
  Nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Preço: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  Categoria: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
Produto.sync({ force: false });
export default Produto;
