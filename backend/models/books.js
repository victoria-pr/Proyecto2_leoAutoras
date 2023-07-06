import connection from "../config/db.js";
import Sequelize from "sequelize";
import Autora from "./autoras.js";
import e from "express";

const Book = connection.define(
  "book",
  {
    idbook: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unsigned: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    publish_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    isbn: {
      type: Sequelize.STRING(55),
      allowNull: true,
    },
    sinopsis: {
      type: Sequelize.STRING(1500),
      allowNull: true,
    },
    pages: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    publisher: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    language: {
      type: Sequelize.STRING(45),
      allowNull: true,
    },
    cover: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    editions: {
      type: Sequelize.STRING(45),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Book;

// Relation with Autora
Book.belongsTo(Autora, { foreignKey: "idauthor", targetKey: "idauthor" });
Autora.hasMany(Book, { foreignKey: "idauthor", sourceKey: "idauthor" });
