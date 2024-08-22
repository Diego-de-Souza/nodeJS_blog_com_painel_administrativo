const {Article} = require('./Article');
const {Category} = require('../categories/Category');
const slugify = require("slugify");

exports.getCagetories = async function(callBack){
    try{
        const getCategories = await Category.findAll();

        return callBack(null, getCategories);
    }catch (err){
        return callBack(err);
    }
}

exports.saveArticle = async function(title, body, id, callBack){
    try{
        const createArticle = await Article.create({
            title: title,
            slug: slugify(title),
            body:body,
            categoryId: id
        })
        return callBack(null, createArticle);
    }catch (err){
        return callBack(err);
    }
}