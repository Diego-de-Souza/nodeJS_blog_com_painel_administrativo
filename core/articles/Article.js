const { DataTypes } = require("sequelize");
const connection = require("../../database/database");

const Article = connection.define('Article', {
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
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categories', 
            key: 'id'
        },
        allowNull: false
    }
});

// Exportar o modelo diretamente
module.exports = Article;
