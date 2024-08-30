const express = require("express");
const router = express.Router();
const HomeService = require("./homeService");

router.get("/", (req, res)=>{
    HomeService.getArticles((err,resp)=>{
        if(err){
            console.log(err);
        }
        HomeService.getAllCategorie((error, resultado)=>{
            if(error){
                console.log(error)
            }
            res.render("index", {artigos: resp, categorias: resultado});
        })
    })
})

router.get("/:slug", (req,res)=>{
    var slug = req.params.slug;
    HomeService.getArticleBySlug(slug, (err,result)=>{
        if(err){
            return res.redirect("/");
        }
        HomeService.getAllCategorie((error, resultado)=>{
            if(error){
                console.log(error)
            }
            res.render("article", {artigo: result.artigo.dataValues, categorias: resultado})
        })
        
    })
})

router.get("/artigos/categorias/:id", (req,res)=>{
    var categoriaId = req.params.id;
    HomeService.getArticlesByCategoryId(categoriaId, (err, result)=>{
        if(err){
            console.log(err);
        }
        HomeService.getAllCategorie((error, resultado)=>{
            if(error){
                console.log(error)
            }
            console.log(result)
            console.log(resultado)
            res.render("index", {artigos: result, categorias: resultado})
        })
    })
})
module.exports = router;