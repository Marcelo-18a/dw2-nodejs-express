import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Pedido = connection.define("pedido", {
  numero: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

Pedido.sync({ force: false });

export default Pedido;
