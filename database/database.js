const Sequelize = require("sequelize");

const connection = new Sequelize('auladb', 'diego', 'Ogeid-880171', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;
