const {Sequelize, DataTypes} = require("sequelize");
const connection = require("../../database/database");

const Article = connection.define('articles', {
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
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    categoryId: {  // Campo de chave estrangeira
        type: DataTypes.INTEGER,
        references: {
            model: 'categories', // Nome da tabela de referência
            key: 'id'
        },
        allowNull: false
    }
})

module.exports = {Article};