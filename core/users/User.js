const { DataTypes } = require("sequelize");
const connection = require("../../database/database");

const User = connection.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Exportar o modelo diretamente
module.exports = User;
