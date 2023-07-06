import connection from "../config/db.js";
import Sequelize from "sequelize";

const User = connection.define(
  "user",
  {
    iduser: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unsigned: true,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING(45),
      allowNull: false,
      unique: true,
    },
    name: {
      type: Sequelize.STRING(45),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(45),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(255),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default User;
