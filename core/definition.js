const Category = require('./categories/Category');
const Article = require('./articles/Article');

// Definindo as associações
Category.hasMany(Article, { foreignKey: 'categoryId', as: 'articles' });
Article.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

module.exports = {
    Category,
    Article
};
