import connection from "../config/db.js";
import Sequelize from "sequelize";

const Autora = connection.define(
  "author",
  {
    idauthor: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unsigned: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    surname: {
      type: Sequelize.STRING(45),
      allowNull: true,
    },
    country: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    birthdate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    deathdate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    image: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    bio: {
      type: Sequelize.STRING(1500),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Autora;
