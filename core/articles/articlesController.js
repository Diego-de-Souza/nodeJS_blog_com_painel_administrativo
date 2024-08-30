const express = require("express");
const router = express.Router();
const articlesService = require('./articlesService');

router.get('/admin/articles/new', (req,res)=>{

    articlesService.getCagetories((err, resp)=>{
        if(err){
            console.log(err);
        }
        res.render('admin/articles/new', {categories: resp});
    })
    
})

router.get("/", (req, res) => {
    articlesService.getArticles((err, resp) => {
        if (err) {
            console.error('Erro ao obter artigos:', err);
            return res.redirect("admin/articles/new");
        }
        console.log(resp);
        res.render("admin/articles/index", { artigos: resp });
    });
});



router.post('/save', (req, res)=>{
    var title = req.body.title;
    var body = req.body.body;
    var categoryId = req.body.category;
    console.log("entrou")
    articlesService.saveArticle(title, body, categoryId, (err,resp)=>{
        if(err){
            console.log(err);
        }
        res.render("admin/articles/index");
    })
})

router.post("/delete", (req, res) => {
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

router.get("/admin/articles/update/:id", (req,res)=>{
    var id = req.params.id;
    console.log('Teste de rota!!!!   Funcionando.')
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
            res.render('admin/articles/edit', resp);
        }
        
    })
})

router.post("/update/body/:id", (req,res)=>{
    var id = req.params.id;
    var body = req.body.body;
    console.log(body)
    if(body != undefined){
        articlesService.updateBodyArticle(body, id, (err, resp)=>{
            if(err){
                return res.redirect("admin/articles/new");
            }

            res.redirect('/articles');
        })
    }else{
        res.redirect("admin/articles/new");
    }
})

module.exports = router;