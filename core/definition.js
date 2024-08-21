const Sequelize = require("sequelize");
const connection = require("../database/database");

const sequelize = new Sequelize(connection);

exports.sequelize = sequelize;
exports.Sequelize = Sequelize;

exports.Articles = sequelize.import('./articles/Article');
exports.Category = sequelize.import('./categories/Category');

//relacionamentos
exports.Category.hasMany(exports.Article);
exports.Articles.belongsTo(exports.Category);

