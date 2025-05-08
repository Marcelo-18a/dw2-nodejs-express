import Cliente from "../models/Cliente.js";
import Pedido from "../models/Pedido.js";

//definidos as relaçoes entre os modols

const defineAssociations = () => {
  // 1 cliente possui muitos pedidos
  Cliente.hasMany(Pedido, { foreignKey: "cliente_id" });
  // 1 pedido pertece a 1 cliente
  Pedido.belongsTo(Cliente, { foreignKey: "cliente_id" });
};
export default defineAssociations;
