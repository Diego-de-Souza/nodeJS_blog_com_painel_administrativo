const async = require('async');
const slugify = require('slugify');

const {Sequelize , Category} = require('./Category');

exports.createTitleCategory = async function (title, callBack){
    try {
        const statusCriacao = await Category.create({
            title:title,
            slug: slugify(title)
        })
        return callBack(null, statusCriacao);
    } catch (err) {
        if(err){
            return callBack(err);
        }
    }
    
}

exports.getCategories = async function(callBack){
    try{
        const categorias = await Category.findAll();
        return callBack(null, categorias);
    }catch(err){
        if(err){
            return callBack(err);
        }
    }
}

exports.deleteCategory = async function(id,callBack){
    try{
        const categoriaDeletada = await Category.destroy({where:{
            id:id
        }})
        return callBack(null, categoriaDeletada)
    }catch (err) {

    }
}

exports.updateCategoryById = async function(id, callBack){
    try{
        const getCategoriaId = await Category.findByPk(id);
        if(getCategoriaId == null){
            return callBack(null, {status: 404});
        }else{
            return callBack(null, {status:200, categoria: getCategoriaId});
        }
    }catch (err){
        return callBack(err);
    }
}

exports.updateTitleCategory = async function(title, id, callBack){
    try{
        const updateTitleCategory = await Category.update({title:title, slug: slugify(title)},{where:{id: id}})
        if(updateTitleCategory == null){
            return callBack(null, {status:404});
        }else{
            return callBack(null, {status:200, result:updateTitleCategory});
        }
    }catch (err){
        return callBack(err);
    }
}