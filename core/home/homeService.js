const { Article, Category } = require('../definition')

exports.getArticles = async function(callBack){
    try{
        const artigos = await Article.findAll({
            order: [
                ['id', 'DESC']
            ]
        });
        return callBack(null,artigos);
    }catch(err){
        return callBack(err);
    }
}

exports.getArticleBySlug = async function(slug, callBack){
    try{
        const artigoSlug = await Article.findOne({
            where: {
                slug:slug
            }
        })
        if(artigoSlug == undefined){
            throw new Error("Não foi possivel acessar o arquivo ou não existe mais no banco!");
            
        }
        return callBack(null, {artigo: artigoSlug});
    }catch(err){
        return callBack(err);
    }
}

exports.getAllCategorie = async function(callBack){
    try{
        const todasCategorias = await Category.findAll();
        return callBack(null, todasCategorias);
    }catch (err){
        return callBack(err);
    }
}

exports.getArticlesByCategoryId = async function(categoryId, callBack){
    try{
        const artigos = await Article.findAll({
            where:{
                categoryId:categoryId
            }, 
            order: [
                ['id', 'DESC']
            ]
        });
        return callBack(null, artigos);
    }catch(err){
        return callBack(err);
    }
}