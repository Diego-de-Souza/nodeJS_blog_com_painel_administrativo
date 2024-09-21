const express = require("express");
const router = express.Router();
const articlesService = require('./articlesService');
const HomeService = require('../home/homeService');
const adminAuth = require("../../middlewares/adminAuth");

router.get('/admin/articles/new', adminAuth, (req,res)=>{

    articlesService.getCategories((err, resp)=>{
        if(err){
            console.log(err);
        }
        res.render('admin/articles/new', {categories: resp});
    })
    
})

router.get("/admin/articles", adminAuth, (req, res) => {
    articlesService.getArticles((err, resp) => {
        if (err) {
            console.error('Erro ao obter artigos:', err);
            return res.redirect("admin/articles/new");
        }
        res.render("admin/articles/index", { artigos: resp });
    });
});

router.post('/save', adminAuth, (req, res)=>{
    var title = req.body.title;
    var body = req.body.body;
    var categoryId = req.body.category;
    articlesService.saveArticle(title, body, categoryId, (err,resp)=>{
        if(err){
            console.log(err);
        }
        res.render("admin/articles/index");
    })
})

router.post("/delete", adminAuth, (req, res) => {
    var id = req.body.id;
    if (id != undefined && !isNaN(id)) { // verifica se o id é um número e não é nulo
        articlesService.deleteArticle(id, (err, resp) => {
            if (err) {
                return res.redirect('/admin/articles/new'); // Atualizado para nova sintaxe
            }
            
            res.redirect('/articles');
        });
    } else {
        res.redirect('/admin/articles/new'); // Atualizado para nova sintaxe
    }
});

router.get("/admin/articles/update/:id", adminAuth, (req,res)=>{
    var id = req.params.id;

    if(isNaN(id)){
        res.redirect('/article');
    }
    articlesService.updateArticleById(id, (err,resp)=>{
        if(err){
            return res.redirect('/admin/articles/new');
        }
        if(resp.status == 404){
            res.redirect('/articles');
        }else{
            HomeService.getAllCategorie((err, resultado)=>{
                if(err){
                    console.log(err);
                }    
                res.render('admin/articles/edit',{artigo: resp.artigo.dataValues,categorias:resultado});
            })
        }
        
    })
})

router.post("/update/body/:id", adminAuth, (req,res)=>{
    var id = req.params.id;
    var title = req.body.title
    var body = req.body.body;
    var category = req.body.categoria;
    if(body != undefined){
        articlesService.updateBodyArticle(body, id,title,category, (err, resp)=>{
            if(err){
                return res.redirect("admin/articles/new");
            }
            res.redirect('/articles');
        })
    }else{
        res.redirect("admin/articles/new");
    }
})

router.get("/page/:num", (req, res)=>{
    var page = req.params.num;

    articlesService.buscaPaginacao(page, (err, resp)=>{
        if(err){
            return res.json(err); /*redirect("admin/articles/new");*/
        }

        res.render("admin/articles/page", {
            pageSet: resp.result.pageSet,
            result: resp.result, 
            categorias: resp.categories 
        });
    })
})

module.exports = router;