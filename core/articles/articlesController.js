const express = require("express");
const router = express.Router();
const articlesService = require('./articlesService');

router.get("/admin/articles", (req,res)=>{
    res.send("Teste article")
})

router.get('/admin/articles/new', (req,res)=>{

    articlesService.getCagetories((err, resp)=>{
        if(err){
            console.log(err);
        }
        res.render('admin/articles/new', {categories: resp});
    })
    
})

router.post('/save', (req, res)=>{
    var title = req.body.title;
    var body = req.body.body;
    var categoryId = req.body.category;
    articlesService.saveArticle(title, body, categoryId, (err,resp)=>{
        if(err){
            console.log(err);
        }
        res.redirect("admin/articles");
    })
})

module.exports = router;