const { Article, Category } = require('../definition') // Ajuste o caminho conforme necessário
const slugify = require('slugify');

exports.getCategories = async function (callBack) {
    try {
        const categories = await Category.findAll();
        return callBack(null, categories);
    } catch (err) {
        return callBack(err);
    }
}

exports.saveArticle = async function (title, body, categoryId, callBack) {
    try {
        const createArticle = await Article.create({
            title: title,
            slug: slugify(title),
            body: body,
            categoryId: categoryId
        });
        return callBack(null, createArticle);
    } catch (err) {
        return callBack(err);
    }
}

exports.getArticles = async function (callBack) {
    try {
        const articles = await Article.findAll({
            include: [{
                model: Category,
                as: 'category',
                attributes: ['id', 'title']
            }]
        });
        return callBack(null, articles);
    } catch (err) {
        return callBack(err);
    }
}

exports.deleteArticle = async function (id, callBack) {
    try {
        const artigoDeletado = await Article.destroy({
            where: {
                id: id
            }
        });
        return callBack(null, artigoDeletado);
    } catch (err) {
        return callBack(err);
    }
}

exports.updateArticleById = async function (id, callBack) {
    try {
        const getArticleId = await Article.findByPk(id);
        if (getArticleId == null) {
            return callBack(null, { status: 404 });
        } else {
            return callBack(null, { status: 200, artigo: getArticleId });
        }
    } catch (err) {
        return callBack(err);
    }
}

exports.updateBodyArticle = async function (body, id,title,category, callBack) {
    try {
        const updateBodyArticle = await Article.update({
            body: body, title: title, categoryId: category, slug: slugify(title)
        }, {
            where: {
                id: id
            }
        });
        if (updateBodyArticle == null) {
            return callBack(null, { status: 404 });
        } else {
            return callBack(null, { status: 200, result: updateBodyArticle });
        }
    } catch (err) {
        return callBack(err);
    }
}

exports.buscaPaginacao = async function(page, callBack) {
    try {
        let offset = 0;

        // Verificação da página
        if (isNaN(page) || page == 1) {
            offset = 0;
        } else {
            offset = (parseInt(page) - 1) * 4;
        }

        const buscaComContagem = await Article.findAndCountAll({
            limit: 4,
            offset: offset
        });

        // Determina se há uma próxima página
        let next;
        if (offset + 4 >= buscaComContagem.count) {
            next = false;
        } else {
            next = true;
        }

        let result = {
            next: next,
            articles: buscaComContagem.rows,  
            total: buscaComContagem.count,
            pageSet: parseInt(page)   
        };

        const categories = await Category.findAll();let pageSet = parseInt(page);

        return callBack(null, {result, categories});
    } catch (err) {
        return callBack(err);
    }
}
