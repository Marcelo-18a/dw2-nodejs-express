import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Movie = connection.define("movies", {
  title: {
    type: Sequelize.STRING,
    allownull: false,
  },
  genre: {
    type: Sequelize.STRING,
    allownull: false,
  },
  duration: {
    type: Sequelize.INTEGER,
    allownull: false,
  },
});
Movie.sync({ force: false });
export default Movie;
