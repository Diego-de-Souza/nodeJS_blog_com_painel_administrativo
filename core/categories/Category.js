// Importando a biblioteca sequelize
const { Sequelize, DataTypes } = require("sequelize");
// Importando a conexão com o banco
const connection = require("../../database/database");

// Criando um model com sequelize
const Category = connection.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false
      }
});

// Exportando o modelo
module.exports = { Category };
