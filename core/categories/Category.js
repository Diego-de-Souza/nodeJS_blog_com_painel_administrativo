const { DataTypes } = require("sequelize");
const connection = require("../../database/database");

const Category = connection.define('Category', {
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

// Exportar o modelo diretamente
module.exports = Category;
